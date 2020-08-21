from django.db import models
import re

# Create your models here.


class UserManager(models.Manager):
    def regValidator(self, postData):
        errors = {}
        if len(postData['fname']) <= 0:
            errors['fnameReq'] = 'First Name field is required'
        if len(postData['lname']) <= 0:
            errors['lnameReq'] = 'Last Name field is required'
        if len(postData['email']) <= 0:
            errors['emailReq'] = 'Email field is required'
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(postData['email']):
            errors['emailMatch'] = 'Please enter a valid email address!'
        if len(postData['pw']) <= 0:
            errors['pwReq'] = 'Password field is required'
        if postData['pw'] != postData['cPW']:
            errors['confirmPW'] = 'Password does not match'
        return errors


class User(models.Model):
    fname = models.CharField(max_length=50)
    lname = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    password = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

    class Meta:
        verbose_name = ("user")
        verbose_name_plural = ("users")

    def __str__(self):
        return self.fname

    def get_absolute_url(self):
        return reverse("user_detail", kwargs={"pk": self.pk})
