from accounts.serializers import UserInfoSerializer, UserSerializer
from rest_framework import serializers

from .models import Categories, OrderItem, Products, Slider, Transactions


class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = ('id', 'name', 'description', 'trash')


class ProductsSerializer(serializers.ModelSerializer):
    # category = CategoriesSerializer()
    class Meta:
        model = Products
        fields = ('product_name', 'description', 'image', 'price', 'size',
                  'category', 'quantity', 'sold', 'date_created', 'date_modified', 'trash')


class OrderItemSerializer(serializers.ModelSerializer):
    # item = ProductsSerializer()
    # user = UserSerializer()

    class Meta:
        model = OrderItem
        fields = ('user', 'ordered', 'item',
                  'quantity', 'price', 'size', 'trash')


class TransactionsSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True)
    user = UserSerializer(read_only=True)
    # user = serializers.PrimaryKeyRelatedField(read_only = True,many = True)

    class Meta:
        model = Transactions
        fields = ('transaction_no', 'user', 'items', 'status', 'total',
                  'notes', 'ordered_date', 'date_modified', 'trash')

    # def get_user(self,obj): #setting method Objects in Model
    # 	return obj.user.username #String Relation Fields


class SliderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Slider
        fields = ('slidername', 'image')
