from django.http.response import \
    HttpResponseNotAllowed  # from the reponse Class
from django.shortcuts import render
# from rest_framework.authentication import TokenAuthentication  #token-auth import to get the classes
from django.views.decorators.csrf import ensure_csrf_cookie
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets  # for model sets
from rest_framework import filters, permissions
from rest_framework.decorators import action
from rest_framework.filters import (  # my search,orderFilter import
    OrderingFilter, SearchFilter)
from rest_framework.permissions import \
    DjangoModelPermissions  # this is use for auth permission reading direct to Model
from rest_framework.permissions import \
    IsAdminUser  # use for permission if it is a ADMIN User Auth
from rest_framework.permissions import (AllowAny,
                                        DjangoModelPermissionsOrAnonReadOnly,
                                        IsAuthenticatedOrReadOnly)
from rest_framework.response import Response  # response Request
from rest_framework.views import APIView
from rest_framework_simplejwt import views as jwt_views

from .models import User, UserInfo
from .serializers import UserInfoSerializer, UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    # authentication_classes = [IsAuthenticatedOrReadOnly, ]


class UserInfoViewSet(viewsets.ModelViewSet):
    queryset = UserInfo.objects.all()
    serializer_class = UserInfoSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    # authentication_classes = [IsAuthenticatedOrReadOnly, ]

    # authentication_classes = [TokenAuthentication,]


# class SignupView(viewsets.ModelViewSet):
#     def post(self, request, format=None):
#         data = self.request.data
#         first_name = data['first_name']
#         last_name = data['last_name']
#         mobile_number = data['mobile_number']
#         email = data['email']
#         address = data['address']
#         username = data['username']
#         password = data['password']
#         password2 = data['password2']

#         if password == password2:
#             if User.objects.filter(email=email).exists():
#                 return Response({'error': 'Email already exists'})
#             else:
#                 if len(password) < 6:
#                     return Response({'error': 'Password must be at least 6 characters'})
#                 else:
#                     user = User.objects.create_user(
#                         username=username,
#                         password=password,
#                         email=email,
#                         is_active=True,
#                         is_superuser=False,
#                         is_staff=False,
#                         is_admin=False,
#                         is_customer=True
#                     )
#                     user.save()
#                     u = User.objects.latest('id')
#                     userinfo = UserInfo(
#                         first_name=first_name,
#                         last_name=last_name,
#                         mobile_number=mobile_number,
#                         address=address,
#                         trash=False,
#                         user_id=u.id
#                     )
#                     userinfo.save()
#                     return Response({'success': 'User created successfully'})
#         else:
#             return Response({'error': 'Passwords do not match'})


# @ensure_csrf_cookie
# def register_user(request):
#     first_name = request.POST.get('first_name')
#     last_name = request.POST.get('last_name')
#     mobile_number = request.POST.get('mobile_number')
#     email = request.POST.get('email')
#     address = request.POST.get('address')
#     username = request.POST.get('username')
#     password = request.POST.get('password')
#     password2 = request.POST.get('password2')

#     if password == password2:
#         if User.objects.filter(email=email).exists():
#             return Response({'error': 'Email already exists'})
#         else:
#             user = User.objects.create_user(
#                 username=username,
#                 password=password,
#                 email=email,
#                 is_active=True,
#                 is_superuser=False,
#                 is_staff=False,
#                 is_admin=False,
#                 is_customer=True
#             )
#             user.save()
#             u = User.objects.latest('id')
#             userinfo = UserInfo(
#                 first_name=first_name,
#                 last_name=last_name,
#                 mobile_number=mobile_number,
#                 address=address,
#                 trash=False,
#                 user_id=u.id
#             )
#             userinfo.save()
#             return Response({'success': 'User created successfully'})
#     else:
#         return Response({'error': 'Passwords do not match'})
