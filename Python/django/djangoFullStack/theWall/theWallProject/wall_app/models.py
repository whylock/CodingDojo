from django.db import models

# Create your models here.


class Post(models.Model):

    creator = models.CharField(max_length=50)
    post = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = _("post")
        verbose_name_plural = _("posts")

    def __str__(self):
        return self.post

    def get_absolute_url(self):
        return reverse("post_detail", kwargs={"pk": self.pk})


class Comment(models.Model):

    post = models.ForeignKey(Post, related_name='posts', on_delete=models.CASCADE)
    creator = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    comment = models.TextField()

    class Meta:
        verbose_name = _("Comment")
        verbose_name_plural = _("Comments")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Comment_detail", kwargs={"pk": self.pk})
