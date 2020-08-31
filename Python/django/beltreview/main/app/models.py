from django.db import models
import bcrypt
import re

# Create your models here.


class UserManager(models.Manager):
    def regValidator(self, postData):
        valid = {
            'errors': {}
        }
        if len(postData['fname']) == 0:
            valid['errors']['firstName'] = 'Please enter a first name.'
        if len(postData['lname']) == 0:
            valid['errors']['lastName'] = ' Please enter a last name.'
        if len(postData['email']) == 0:
            valid['errors']['email'] = 'Please enter an email.'
        else:
            EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
            if not EMAIL_REGEX.match(postData['email']):
                valid['errors']['emailMatch'] = 'Please enter a valid email address.'
            email_found = User.objects.filter(username=postData['email'])
            if len(email_found) > 0:
                valid['errors']['emailExists'] = 'The email you entered already exists. Try logging in.'
        if len(postData['pw']) < 5:
            valid['errors']['password'] = 'Passwords should be at least 5 characters.'
        else:
            if postData['pw'] != postData['cPW']:
                valid['errors']['passwordMatch'] = 'Password does not match.'

        if len(valid['errors']) == 0:
            hashPW = bcrypt.hashpw(postData['pw'].encode(), bcrypt.gensalt()).decode()
            print(hashPW)
            user_created = User.objects.create(
                fname=postData['fname'],
                lname=postData['lname'],
                username=postData['email'],
                password=hashPW,
            )

            valid['users'] = user_created
        return valid


class ItemManager(models.Manager):
    def itemValidator(self, postData, id):
        valid = {
            'errors': {}
        }
        if len(postData['name']) == 0:
            valid['errors']['itemName'] = 'Please enter the item name'
        elif len(postData['name']) < 3:
            valid['errors']['itemName'] = 'Item name should be more than 3 Characters'

        added_by = User.objects.get(id=id)
        if len(valid['errors']) == 0:
            item_to_add = Item.objects.create(
                name=postData['name'],
                user=added_by,
            )
        print(item_to_add)
        return valid


class User(models.Model):
    fname = models.CharField(max_length=50)
    lname = models.CharField(max_length=50)
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now=False, auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, auto_now_add=False)
    objects = UserManager()

    def __str__(self):
        return f'User Object: {self.id} - {self.username}'


class Item(models.Model):
    name = models.CharField(max_length=50)
    user = models.ForeignKey(User, related_name="wishlist", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now=False, auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, auto_now_add=False)
    objects = ItemManager()

    def __str__(self):
        return f'Item Object: {self.id} - {self.name}'
