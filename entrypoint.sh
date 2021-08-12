#!/bin/sh
python manage.py flush --no-input
python manage.py makemigrations
python manage.py migrate
#python manage.py loaddata */fixtures/*.json
echo "from django.contrib.auth.models import User; user=User.objects.create_user('${ADMIN_USER}', password='${ADMIN_PASSWORD}'); user.is_superuser=True; user.is_staff=True; user.save()" | python manage.py shell
exec "$@"
