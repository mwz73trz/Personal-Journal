from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse

class Journal(models.Model):
    title = models.CharField(max_length=100, blank=False)
    description = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='journals')

    class Meta:
        ordering = ['date_created']

    def __str__(self):
        return f"{self.title}"
