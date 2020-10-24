from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models
from django.utils import timezone

# AUTH_USER_MODEL = 'account.UserAccount' for setting
now = timezone.now()




class MyAccountManager(BaseUserManager):
    def create_user(self, email, username, password=None, **extra_fields):  # Create user method

        if not email:
            raise ValueError('Users must have an email address')
        if not username:
            raise ValueError('Users must have a username')

        user = self.model(
            email=self.normalize_email(email),
            username=username,
            # is_user=1
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password, **extra_fields):
        user = self.create_user(
            email=self.normalize_email(email),
            password=password,
            username=username,
        )
        user.is_admin = True
        user.is_superuser = True
        user.is_customer = True
        user.is_staff = True
        user.is_active = True
        user.save(using=self._db)
        return user



class User(AbstractBaseUser):
    username = models.CharField(max_length=30,unique=True)
    password = models.CharField(max_length=255, unique=True)
    email = models.EmailField(verbose_name="email", max_length=60, unique=True)
    date_joined = models.DateTimeField(verbose_name='date joined', auto_now_add=True)
    last_login = models.DateTimeField(verbose_name='last login', auto_now=True)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_customer = models.BooleanField(default=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = MyAccountManager()

    # For checking permissions. to keep it simple all admin have ALL permissons
    def has_perm(self, perm, obj=None):
        return self.is_admin

    # Does this user have permission to view this app? (ALWAYS YES FOR SIMPLICITY)
    def has_module_perms(self, app_label):
        return True

    def __str__(self):
        return self.username


class UserInfo(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        verbose_name="User",
    )

    first_name = models.CharField(
        verbose_name="First Name", max_length=40, blank=False)
    last_name = models.CharField(
        verbose_name="Last Name", max_length=40, blank=False)
    mobile_number = models.CharField(max_length=50, blank=True)
    address = models.CharField(verbose_name="Address",max_length=50, blank=True)
    trash = models.BooleanField(verbose_name="Trash", default=False)
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.first_name + " " + self.last_name
