from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from django.contrib.auth.password_validation import validate_password
from .models import CustomUser, OTP
from django.core.exceptions import ValidationError
from rest_framework_simplejwt.tokens import RefreshToken

User = get_user_model()

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'phone_number', 'first_name', 'last_name', 'terms_accepted']
        read_only_fields = ['id']

class UserCreateSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    confirm_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = [
            'email', 'phone_number', 'first_name', 'last_name',
            'password', 'confirm_password', 'terms_accepted'
        ]

    def validate(self, data):
        errors = {}

        # Cleaner filter
        if CustomUser.objects.filter(email=data['email']).exists():
            errors['email'] = 'Email already registered'

        if CustomUser.objects.filter(phone_number=data['phone_number']).exists():
            errors['phone_number'] = 'Phone number already registered'

        # Password confirmation
        if data['password'] != data['confirm_password']:
           errors['password'] = 'Passwords do not match'

        # Terms check
        if not data.get('terms_accepted'):
            errors['terms_accepted'] = 'You must accept terms'

        if errors:
            raise serializers.ValidationError(errors)
        
        return data

    def create(self, validated_data):
        validated_data.pop('confirm_password')  # Don't store confirm_password
        user = User.objects.create_user(**validated_data)
        refresh = RefreshToken.for_user(user)

        return {
            'user': user,
            'tokens': {
                'access': str(refresh.access_token),
                'refresh': str(refresh)
            }
        }


"""
user login serializer
"""
class UserLogInSerialier(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(email=data['email'], password=data['password'])

        if not user:
            raise serializers.ValidationError({
                'non_field_errors': ["Invalid credentials"]
            })
        
        refresh = RefreshToken.for_user(user)
        data['tokens'] = {
            'access': str(refresh.access_token),
            'refresh': str(refresh)
        }
        
        data['user'] = user
        return data

# OTP request
class RequestOTPSerializer(serializers.Serializer):
    email = serializers.EmailField()

    def validate_email(self, value):
        """Ensure the user exists."""
        if not User.objects.filter(email=value).exists():
            raise ValidationError("User with this email does not exist.")
        return value
