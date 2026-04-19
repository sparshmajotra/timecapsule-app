from rest_framework import serializers
from django.utils import timezone
from .models import Message


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'
        read_only_fields = ['user']

    def validate_delivery_time(self, value):
        if value <= timezone.now():
            raise serializers.ValidationError("Delivery time must be in the future")
        return value