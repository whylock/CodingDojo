from django.db import models

# Create your models here.


class ShowManager(models.Manager):
    def showValidator(self, postdata):
        errors = {}
        if len(postdata['title']) < 2:
            errors['name'] = 'Title should be at least 2 characters'
        if len(postdata['network']) < 3:
            errors['network'] = 'The network should be at least 3 characters'
        if len(postdata['desc']) >= 1 or len(postdata['desc']) < 10:
            errors['desc'] = 'The description should be at least 10 characters'
        return errors


class Show(models.Model):
    title = models.CharField(max_length=255)
    network = models.CharField(max_length=255)
    release_date = models.CharField(max_length=255)
    desc = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = ShowManager()

    class Meta:

        verbose_name = ("show")
        verbose_name_plural = ("shows")

    def __str__(self):
        return f'Show Objects: {self.title} -{self.id}'

    def get_absolute_url(self):
        return reverse("show_detail", kwargs={"pk": self.pk})
