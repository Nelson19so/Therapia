'''''
admin dashboard view for only admin __
this view contains all admin functionality (CRUD) for handling and managing user account only
Only the admin can access this view logics via an interface

WARNING: this view should be handled carefully to avoid exploiting/exposing harmful or usefull
         data/information to the user or public overall
'''''

# all necessary import
from rest_framework import status, generics
from rest_framework.permissions import IsAdminUser
from rest_framework.views import APIView, Response
from apps.accounts.serializers import UserProfileSerializer
from django.contrib.auth import get_user_model


# getting the user model for use
User = get_user_model()


# this class base view system (CBVs) list and create api view for use via admin dashboard
class ListAllUsers(generics.ListCreateAPIView):
    permission_classes = [IsAdminUser]
    serializer_class = UserProfileSerializer
    queryset = User.objects.all() # listing users

    # handling post request from the admin to create new user
    def post(self, request, *args, **kwargs):
        # getting the re usable class
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exceptions=True)
        serializer.save()

        # returns a response after a successful process.
        return Response({
            'success': True,
            'message': 'New user created successfully'
        }, status=status.HTTP_201_CREATED)
