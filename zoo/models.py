from django.db import models

class Zoo(models.Model):
    name = models.CharField(max_length=128)
    animals = models.IntegerField()
    visitors = models.IntegerField()
