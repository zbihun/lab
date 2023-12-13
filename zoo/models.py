from django.db import models

class Zoo(models.Model):
    name = models.CharField(max_length=128)
    animals = models.IntegerField()
    visitors = models.IntegerField()
    price = models.DecimalField(max_digits=6, decimal_places=2, default=9.99)
