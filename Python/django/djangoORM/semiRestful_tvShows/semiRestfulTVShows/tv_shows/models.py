from django.db import models

# Create your models here.


class Show(models.Model):
    title = models.CharField(max_length=255)
    network = models.CharField(max_length=255)
    release_date = models.CharField(max_length=255)
    desc = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:

        verbose_name = ("show")
        verbose_name_plural = ("shows")

    def __str__(self):
        return f'Show Objects: {self.title} -{self.id}'

    def get_absolute_url(self):
        return reverse("show_detail", kwargs={"pk": self.pk})
