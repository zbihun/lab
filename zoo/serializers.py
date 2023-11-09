from rest_framework import serializers
from .models import Zoo

class ZooSerializer(serializers.ModelSerializer):
    class Meta:
        model = Zoo
        fields = ['id', 'name', 'animals', 'visitors']
