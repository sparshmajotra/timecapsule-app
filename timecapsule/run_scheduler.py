import time
import os

while True:
    print("Checking for scheduled emails...")
    os.system("python manage.py send_scheduled_emails")
    time.sleep(60)