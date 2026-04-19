from django.core.management.base import BaseCommand
from django.utils import timezone
from core.models import Message
from django.core.mail import send_mail

class Command(BaseCommand):
    help = 'Send scheduled emails'

    def handle(self, *args, **kwargs):
        now = timezone.now()

        messages = Message.objects.filter(
            delivery_time__lte=now,
            is_delivered=False
        )

        for message in messages:
            send_mail(
                message.title,
                message.content,
                "aqaz0809@gmail.com",
                [message.user.email],
            )

            message.is_delivered = True
            message.save()

            self.stdout.write(f"Sent message: {message.title}")