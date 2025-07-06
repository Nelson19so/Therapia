'''''
admin dashboard view for only admin __
this view contains all admin functionality (CRUD) for handling and managing user account only
Only the admin can access this view logics via an interface

WARNING: this view should be handled carefully to avoid exploiting/exposing harmful or useful
         data/information to the user or public overall
'''''

# all necessary import
from rest_framework import status, generics
from rest_framework.permissions import IsAdminUser
from rest_framework.views       import APIView, Response
from apps.accounts.serializers  import UserProfileSerializer
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


# delete or update users or user
class DeleteUserApiView(APIView):
    permission_classes = [IsAdminUser]
    
    def delete(self, request):
        user_ids = request.data.get('user_ids')

        if user_ids:
            try:

                user = generics.get_object_or_404(User, id__in=user_ids)
                user.delete()

            except User.DoesNotExist:
                return Response({
                    'success': True,
                    'message': 'Users Deleted successfully'
                }, status=status.HTTP_204_NO_CONTENT)
            
        else:
            return Response({
                'success':  False,
                'message': 'User ids not found'
            }, status=status.HTTP_400_BAD_REQUEST)
        

# UPDATE api view for users
class UpdateApiViewsForUsers(generics.UpdateAPIView):
    serializer_class = UserProfileSerializer
    permission_classes = [IsAdminUser]
    lookup_field = 'user_id'
    
    def get_queryset(self, user_id):
        return generics.get_object_or_404(User, id=user_id)
    
    def update(self, request, user_id, *args, **kwargs):
        partial = kwargs.pop('partials', False)
        instance = self.get_queryset(user_id)

        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        return Response({
            "success": True,
            "message": "Update successful"
        }, status=status.HTTP_200_OK)
    

# admin user status count api class base view (CBVs)
class AdminUserStatusCount(APIView):
    permission_classes = [IsAdminUser]

    def count_users(self, request):
        users_count = 0
        
        try:

            # counting the total number of users created account
            users_count = User.objects.all().count()
        
            return Response({
                'success': True, 
                'users_count': users_count
            },status=status.HTTP_200_OK)
        
        except User.DoesNotExist:
            return Response({
                'success':     False, 
                'users_count': users_count
            }, status=status.HTTP_204_NO_CONTENT)
    
