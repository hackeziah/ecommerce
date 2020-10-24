from django.http.response import \
    HttpResponseNotAllowed  # from the reponse Class
from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets  # for model sets
from rest_framework import filters
from rest_framework.authentication import \
    TokenAuthentication  # token-auth import to get the classes
from rest_framework.decorators import action
from rest_framework.filters import (  # my search,orderFilter import
    OrderingFilter, SearchFilter)
from rest_framework.permissions import \
    DjangoModelPermissions  # this is use for auth permission reading direct to Model
from rest_framework.permissions import \
    IsAdminUser  # use for permission if it is a ADMIN User Auth
from rest_framework.permissions import (AllowAny,
                                        DjangoModelPermissionsOrAnonReadOnly,
                                        IsAuthenticated,
                                        IsAuthenticatedOrReadOnly)
from rest_framework.response import Response  # response Request

from .models import Categories, OrderItem, Products, Slider, Transactions
from .serializers import (CategoriesSerializer, OrderItemSerializer,
                          ProductsSerializer, SliderSerializer,
                          TransactionsSerializer)

#


class CategoriesViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = Categories.objects.all()
    serializer_class = CategoriesSerializer
    #   permissions_classes = [IsAuthenticated  ]


class ProductsViewSet(viewsets.ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filter_fields = ('category',)  # for filtering the data
    # search Filter use "___" for object contains
    search_fields = ('product_name', 'description', 'price', 'category__name')
    ordering_fields = ('id', 'product_name', 'category', 'date_created')
    ordering = ('id')
    permission_classes = (IsAuthenticatedOrReadOnly,)

    # permissions_classes = [DjangoModelPermissionsOrAnonReadOnly]


class OrderItemViewSet(viewsets.ModelViewSet):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer


class TransactionsViewSet(viewsets.ModelViewSet):
    queryset = Transactions.objects.all()
    serializer_class = TransactionsSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filter_fields = ('transaction_no',)  # for filtering the data
    # search Filter use "___" for object contains
    search_fields = ('transaction_no', 'user__username')
    ordering_fields = ('transaction_no', 'ordered_date')
    ordering = ('ordered_date')
    lookup_field = 'transaction_no'
    # permission_classes = (IsAuthenticatedOrReadOnly,)


class SliderViewSet(viewsets.ModelViewSet):
    serializer_class = SliderSerializer
    queryset = Slider.objects.all()
    permission_classes = (IsAuthenticatedOrReadOnly,)
