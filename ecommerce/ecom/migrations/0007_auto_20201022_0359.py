# Generated by Django 3.1.1 on 2020-10-21 19:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecom', '0006_auto_20201022_0357'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orderitem',
            name='size',
            field=models.CharField(max_length=20, verbose_name='Size'),
        ),
        migrations.AlterField(
            model_name='transactions',
            name='transaction_no',
            field=models.CharField(default='TRANS-2020-31A7D5', editable=False, max_length=255, primary_key=True, serialize=False, unique=True, verbose_name='Transaction No'),
        ),
    ]
