from django.utils.timezone import now
from rest_framework import serializers

from .models import User, UserInfo


class UserSerializer(serializers.ModelSerializer):
	
	class  Meta:
		model = User
		fields = ('username','password','email','date_joined','last_login','is_admin','is_active','is_staff','is_superuser','is_customer')
	# def get_days_since_joined(self,obj):
	# 	return (now - obj.date_joined).days
class UserInfoSerializer(serializers.ModelSerializer):
	class  Meta:
		model = UserInfo
		fields = ('user','first_name','last_name','mobile_number','address','trash','date_created','date_modified')
