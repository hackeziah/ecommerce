# Generated by Django 3.1.1 on 2020-10-01 07:24

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Categories',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(max_length=29, verbose_name='name')),
                ('description', models.TextField(max_length=29, verbose_name='description')),
                ('trash', models.BooleanField(default=False, verbose_name='Trash')),
            ],
        ),
        migrations.CreateModel(
            name='OrderItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ordered', models.BooleanField(default=0)),
                ('quantity', models.IntegerField(default=1, verbose_name='Quantity')),
                ('price', models.DecimalField(decimal_places=2, default=None, max_digits=20, verbose_name='Price')),
                ('trash', models.BooleanField(default=False, verbose_name='Trash')),
            ],
        ),
        migrations.CreateModel(
            name='Transactions',
            fields=[
                ('transaction_no', models.CharField(default='TRANS-2020-EDFE03', editable=False, max_length=255, primary_key=True, serialize=False, unique=True, verbose_name='Transaction No')),
                ('status', models.IntegerField(choices=[(0, 'Pending'), (1, 'Delived'), (2, 'Canceled')], default=0, verbose_name='status')),
                ('total', models.DecimalField(decimal_places=2, default=None, max_digits=20, verbose_name='Total')),
                ('notes', models.TextField(verbose_name='Notes')),
                ('ordered_date', models.DateTimeField(auto_now_add=True)),
                ('date_modified', models.DateTimeField(auto_now=True)),
                ('trash', models.BooleanField(default=False, verbose_name='Trash')),
                ('items', models.ManyToManyField(to='ecom.OrderItem')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='User')),
            ],
        ),
        migrations.CreateModel(
            name='Products',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_name', models.TextField(max_length=50, verbose_name='Name')),
                ('description', models.TextField(max_length=50, verbose_name='Description')),
                ('image', models.ImageField(upload_to='products')),
                ('price', models.DecimalField(decimal_places=2, default=None, max_digits=20, verbose_name='Price')),
                ('size', models.IntegerField(choices=[(0, 'XL'), (1, 'L'), (2, 'M'), (3, 'S'), (4, 'XS')], default=0, verbose_name='Size')),
                ('quantity', models.IntegerField(verbose_name='Quantity')),
                ('sold', models.IntegerField(verbose_name='Sold')),
                ('date_created', models.DateTimeField(auto_now_add=True)),
                ('date_modified', models.DateTimeField(auto_now=True)),
                ('trash', models.BooleanField(default=False, verbose_name='Trash')),
                ('category', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='ecom.categories', verbose_name='Category')),
            ],
        ),
        migrations.AddField(
            model_name='orderitem',
            name='item',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ecom.products', verbose_name='Item'),
        ),
        migrations.AddField(
            model_name='orderitem',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='User'),
        ),
    ]
