
from accounts.api import UserInfoViewSet  # getting the API VIEWS here
from accounts.api import UserViewSet
from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView  # for template render react
from ecom.api import CategoriesViewSet  # getting the API VIEWS here
from ecom.api import (OrderItemViewSet, ProductsViewSet, SliderViewSet,
                      TransactionsViewSet)
from rest_framework import routers
from rest_framework.authtoken import views  # for obtain_auth_token setup
from rest_framework_simplejwt.views import TokenRefreshView  # For Auth JWT
from rest_framework_simplejwt.views import TokenObtainPairView

router = routers.DefaultRouter()

router.register(r'users', UserViewSet, basename="users")
router.register(r'usersinfo', UserInfoViewSet, basename="usersinfo")
router.register(r'categories', CategoriesViewSet, basename="categories")
router.register(r'products', ProductsViewSet, basename="products")
router.register(r'order-item', OrderItemViewSet, basename="order-item")
router.register(r'transactions', TransactionsViewSet, basename="transactions")
router.register(r'slider', SliderViewSet, basename="slider")


# this is for Urls register the ViewSet


urlpatterns = [
    path('api/', include(router.urls)),

    path('api-auth/', include('rest_framework.urls')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('admin/', admin.site.urls),
    path('api/accounts/', include('accounts.urls')),  # api/accounts/register
    # url(r'^api/register$', register_user),

    # path('',TemplateView.as_view(template_name='index.html'))
    path('api-auth', include('rest_framework.urls')),
    # for obtain_auth_token setup
    path('api-token-auth/',  views.obtain_auth_token)
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
