from django.shortcuts import render
from rest_framework import permissions
from rest_framework.permissions import (AllowAny,
                                        DjangoModelPermissionsOrAnonReadOnly,
                                        IsAuthenticatedOrReadOnly)
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import User, UserInfo


class SignupView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format=None):
        data = self.request.data
        first_name = data['first_name']
        last_name = data['last_name']
        mobile_number = data['mobile_number']
        email = data['email']
        address = data['address']
        username = data['username']
        password = data['password']
        password2 = data['password2']

        if password == password2:
            if User.objects.filter(email=email).exists():
                return Response({'error': 'Email already exists'})
            if User.objects.filter(username=username).exists():
                return Response({'error': 'Username already use'})
            else:
                if len(password) < 6:
                    return Response({'error': 'Password must be at least 6 characters'})
                else:
                    user = User.objects.create_user(
                        username=username,
                        password=password,
                        email=email,
                        is_active=True,
                        is_superuser=False,
                        is_staff=False,
                        is_admin=False,
                        is_customer=True
                    )
                    user.save()
                    u = User.objects.latest('id')
                    userinfo = UserInfo(
                        first_name=first_name,
                        last_name=last_name,
                        mobile_number=mobile_number,
                        address=address,
                        trash=False,
                        user_id=u.id
                    )
                    userinfo.save()
                    return Response({'success': 'User created successfully'})
        else:
            return Response({'error': 'Passwords do not match'})
