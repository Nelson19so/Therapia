# admin dashboard view for user

from rest_framework import status, generics
from rest_framework.permissions import IsAdminUser
from rest_framework.views import APIView