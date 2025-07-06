# urls.py
from django.urls import path
from apps.accounts.views.accounts_view import (
    UserSignUpListCreateApiView, UserProfileView, 
    UserDeleteView, UserLoginListCreateApiView, 
    UserLogoutView, RequestOTPView
)

urlpatterns = [
    path('register/', UserSignUpListCreateApiView.as_view(), name='UserSignUpListCreateApiView'),
    path('profile/',  UserProfileView.as_view(), name='UserProfileView'),
    path('delete/',   UserDeleteView.as_view(),  name='UserDeleteView'),
    path('login/',    UserLoginListCreateApiView.as_view(), name='UserLoginListCreateApiView'),  # User Login
    path('logout/',   UserLogoutView.as_view(),  name='UserLogoutView'),  # User Logout
    path('forgot-password/', RequestOTPView.as_view(), name='request-otp'),
]