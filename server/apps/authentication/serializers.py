from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from django.contrib.auth.password_validation import validate_password
from .models import CustomUser

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

    def validate(self, attrs):
        first_name = attrs.get('first_name')
        last_name = attrs.get('last_name')
        email = attrs.get('email')
        phone_number = attrs.get("phone_number")

        # Cleaner filter
        if CustomUser.objects.filter(
            first_name=first_name,
            last_name=last_name,
            email=email,
            phone_number=phone_number
        ).exists():
            raise serializers.ValidationError({
                'user': "A user with this information already exists."
            })

        # Password confirmation
        if attrs['password'] != attrs['confirm_password']:
            raise serializers.ValidationError({
                "password": "Password and Confirm Password must match."
            })

        # Terms check
        if not attrs.get('terms_accepted', False):
            raise serializers.ValidationError({
                "terms_accepted": "Please accept the terms and conditions."
            })

        return attrs

    def create(self, validated_data):
        validated_data.pop('confirm_password')  # Don't store confirm_password
        user = User.objects.create_user(**validated_data)
        return user


"""
user login serializer
"""
class UserLogInSerialier(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get("password")

        user = authenticate(email=email, password=password)

        if user is not None:
            raise serializers.ValidationError("Invalid credentials")
        
        attrs['user'] = user
        return attrs
