# Generated by Django 3.1.1 on 2020-10-18 16:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userinfo',
            name='barangay',
        ),
        migrations.RemoveField(
            model_name='userinfo',
            name='city',
        ),
        migrations.RemoveField(
            model_name='userinfo',
            name='country',
        ),
        migrations.RemoveField(
            model_name='userinfo',
            name='myzip',
        ),
        migrations.RemoveField(
            model_name='userinfo',
            name='state',
        ),
    ]
