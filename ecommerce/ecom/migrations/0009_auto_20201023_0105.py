# Generated by Django 3.1.1 on 2020-10-22 17:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecom', '0008_auto_20201022_2158'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transactions',
            name='transaction_no',
            field=models.CharField(default='TRANS-2020-DDC12E', editable=False, max_length=255, primary_key=True, serialize=False, unique=True, verbose_name='Transaction No'),
        ),
    ]
