from django.db import models

# Create your models here.


class Book(models.Model):
    title = models.CharField(max_length=255)
    desc = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Book Object: {self.title} - {self.id}'


class Author(models.Model):
    books = models.ManyToManyField(Book, related_name='books')
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    notes = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Author Object: {self.first_name} {self.last_name} - {self.id}'
