from django.shortcuts import render
from django.contrib.auth import get_user_model, login, logout
from rest_framework import status, generics
from rest_framework.response import Response
from .models import CustomUser, OTP
from .serializers import UserCreateSerializer, UserProfileSerializer, UserLogInSerialier, RequestOTPSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken

User = get_user_model()

class UserSignUpListCreateApiView(APIView):
    permission_classes = [AllowAny]  # Allow anyone to access this view (for signup)

    def post(self, request):
        """
        Handle user registration (sign up)
        """
        serializer = UserCreateSerializer(data=request.data)

        if serializer.is_valid():
          serializer.save()  # Save the new user to the database
          return Response({
              'success': True,
              'user': {
                'email': serializer.validated_data['email'],
                'first_name': serializer.validated_data['first_name']
              },
              'tokens': serializer.validated_data['tokens']
          }, status=status.HTTP_201_CREATED)

        return Response({
          'success': False,
          'error': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)


# For retrieving and updating user profiles
class UserProfileView(generics.RetrieveUpdateAPIView):
    serializer_class = UserCreateSerializer
    queryset = User.objects.all()
    permission_classes = [IsAuthenticated]
    lookup_field = 'pk'

    def get_object(self):
        return self.request.user  # This ensures that only the logged-in user can view/update their profile


# delete user account
class UserDeleteView(generics.DestroyAPIView):
    queryset = User.objects.all()
    permission_classes = [IsAuthenticated]  # Ensure the user is authenticated
    
    def get_object(self):
        # We can restrict deletion to the currently authenticated user
        return self.request.user  # This ensures only the logged-in user can delete their own account

    def delete(self, request, *args, **kwargs):
        # Optionally, add a check if the user is deleting their own account
        user = self.get_object()
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)  # Return a 204 No Content response on successful deletion
  

"""
Handle user login
"""
class UserLoginListCreateApiView(generics.GenericAPIView):
    serializer_class = UserLogInSerialier
    permission_classes = [AllowAny]
  
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        
        if serializer.is_valid():
            user = serializer.validated_data['user']
            login(request, user)
          
            return Response({
                'success': True,
                'user': {
                  'email': user.email,
                },
              'tokens': serializer.validated_data['tokens']
            })
        
        return Response({
            'success': False,
            'errors': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)


class UserLogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        # Log the user out and clear the session
        logout(request)
        return Response({
            'message': 'Logout successful!'
        }, status=status.HTTP_200_OK)


    
"""""
request an OTP fr password reset
"""""
class RequestOTPView(generics.CreateAPIView):
    serializer_class = RequestOTPSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        """Handle OTP request via email"""
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            user = User.objects.get(email=email)

            OTP.objects.filter(user=user, is_verified=False).delete()

            # Create OTP and associate it with the user
            otp = OTP.objects.create(user=user)

            # Send OTP to the user's email
            send_mail(
                'Password Reset OTP',
                f'Your OTP for resetting password is {otp.otp}',
                settings.DEFAULT_FROM_EMAIL,
                [user.email],
                fail_silently=False,
            )

            return Response({
                'success': True,
                'user': {
                    'email': user.email,
                    'otp': user.otp,
                },
            }, status=status.HTTP_200_OK)

        return Response({
            'success': False, 
            'error': serializer.error,
        },""" status code goes here """)
