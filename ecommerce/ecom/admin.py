from django.contrib import admin
from .models import OrderItem,Transactions,Products,Categories

admin.site.register(OrderItem)
admin.site.register(Transactions)
admin.site.register(Products)
admin.site.register(Categories)
