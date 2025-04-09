# urls.py
from django.urls import path
from .views import UserSignUpListCreateApiView, UserProfileView, UserDeleteView, UserLoginListCreateApiView, UserLogoutView

urlpatterns = [
  path('register/', UserSignUpListCreateApiView.as_view(), name='UserSignUpListCreateApiView'),
  path('profile/<int:pk>/', UserProfileView.as_view(), name='UserProfileView'),
  path('delete/', UserDeleteView.as_view(), name='UserDeleteView'),
  path('login/', UserLoginListCreateApiView.as_view(), name='UserLoginListCreateApiView'),  # User Login
  path('logout/', UserLogoutView.as_view(), name='UserLogoutView'),  # User Logout
]