# Generated by Django 3.0.6 on 2021-08-13 14:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0002_auto_20210813_1431'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='constraints',
            field=models.CharField(blank=True, max_length=300),
        ),
        migrations.AlterField(
            model_name='course',
            name='remark',
            field=models.CharField(blank=True, max_length=300),
        ),
    ]