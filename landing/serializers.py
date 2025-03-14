from rest_framework import serializers
from .models import RacePost

class RacePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = RacePost
        fields = ['id', 'title', 'distance', 'elevation', 'description', 'date_posted']
