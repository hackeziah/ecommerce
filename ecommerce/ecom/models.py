import datetime
import uuid

from accounts.models import User, UserInfo  # model for accounts application
from django.db import models
from django.utils import timezone

now = timezone.now()

order_stat = (
    (0, "Pending"),
    (1, "Delived"),
    (2, "Canceled")
)
size = (
    (0, "XL"),
    (1, "L"),
    (2, "M"),
    (3, "S"),
    (4, "XS")
)


class Categories(models.Model):
    name = models.CharField(max_length=29, verbose_name="name")
    description = models.TextField(
        max_length=29, verbose_name="description", default="NULL")
    trash = models.BooleanField(verbose_name="Trash", default=False)

    def __str__(self):
        return self.name


class Products(models.Model):
    product_name = models.CharField(max_length=50, verbose_name="Name")
    description = models.TextField(max_length=50, verbose_name="Description")
    image = models.ImageField(upload_to='products')
    price = models.DecimalField(
        verbose_name="Price", default=None, max_digits=20, decimal_places=2)
    size = models.IntegerField(verbose_name="Size", default=0, choices=size)
    category = models.ForeignKey(
        Categories, on_delete=models.CASCADE, verbose_name="Category")
    quantity = models.IntegerField(verbose_name="Quantity")
    sold = models.IntegerField(verbose_name="Sold")
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)
    trash = models.BooleanField(verbose_name="Trash", default=False)

    def __str__(self):
        return self.product_name


class TestCart(models.Model):
    item = models.ForeignKey(
        Products, on_delete=models.CASCADE, verbose_name="Item")


class OrderItem(models.Model):
    user = models.ForeignKey(User, verbose_name="User",
                             on_delete=models.CASCADE)
    ordered = models.BooleanField(default=0)
    item = models.ForeignKey(
        Products, on_delete=models.CASCADE, verbose_name="Item")
    quantity = models.IntegerField(default=1, verbose_name="Quantity")
    price = models.DecimalField(
        verbose_name="Price", default=None, max_digits=20, decimal_places=2)
    size = models.CharField(max_length=20, verbose_name="Size")
    trash = models.BooleanField(verbose_name="Trash", default=False)

    def __str__(self):
        return self.item.product_name + "ordered by" + self.user.username

    def get_total_item_price(self):
        return self.quantity * self.price


class Transactions(models.Model):
    def codeGeneratorTransac():
        now = datetime.datetime.now()
        year = now.year
        ramdom = uuid.uuid4().hex[:6].upper()
        finalramdom = str('TRANS-') + str(year)+'-'+str(ramdom)
        return finalramdom
    transaction_no = models.CharField(verbose_name="Transaction No", max_length=255,
                                      unique=True, primary_key=True, default=codeGeneratorTransac(), editable=False)
    user = models.ForeignKey(User, verbose_name="User",
                             on_delete=models.CASCADE)
    items = models.ManyToManyField(OrderItem)
    status = models.IntegerField(
        verbose_name="status", default=0, choices=order_stat)
    total = models.DecimalField(
        verbose_name="Total", default=None, max_digits=20, decimal_places=2)
    notes = models.TextField(verbose_name="Notes")
    ordered_date = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)
    trash = models.BooleanField(verbose_name="Trash", default=False)

    def __str__(self):
        return self.transaction_no + "by" + self.user.username


class Slider(models.Model):
    slidername = models.CharField(max_length=50, verbose_name="slidername")
    image = models.ImageField(upload_to='slider')

    def __str__(self):
        return self.slidername
