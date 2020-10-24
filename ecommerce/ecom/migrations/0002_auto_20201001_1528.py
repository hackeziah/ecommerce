# Generated by Django 3.1.1 on 2020-10-01 07:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecom', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='categories',
            name='name',
            field=models.CharField(max_length=29, verbose_name='name'),
        ),
        migrations.AlterField(
            model_name='products',
            name='product_name',
            field=models.CharField(max_length=50, verbose_name='Name'),
        ),
        migrations.AlterField(
            model_name='transactions',
            name='transaction_no',
            field=models.CharField(default='TRANS-2020-2D1214', editable=False, max_length=255, primary_key=True, serialize=False, unique=True, verbose_name='Transaction No'),
        ),
    ]