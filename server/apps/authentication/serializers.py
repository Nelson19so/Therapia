from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from .models import CustomUser

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'phone_number', 'first_name', 'last_name', 'terms_accepted']
        read_only_fields = ['id']

class UserCreateSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    confirm_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = CustomUser
        fields = [
            'email', 'phone_number', 'first_name', 'last_name',
            'password', 'confirm_password', 'terms_accepted'
        ]

        model = User
        fields = ['email', 'phone_number', 'first_name', 'last_name', 'password', 'confirm_password', 'terms_accepted']
        
    def validate(self, attrs):
        first_name = attrs.get('first_name')
        last_name = attrs.get('last_name')
        email = attrs.get('email')
        phone_number = attrs.get("phone_number")

        # ✅ filter conf
        if CustomUser.objects.filter(
            first_name=first_name,
            last_name=last_name,
            email=email,
            phone_number=phone_number
        ).exists():
            raise serializers.ValidationError({
                'user': "A user with this information already exists."
            })

        # ✅ Password confirmation
        if attrs['password'] != attrs['confirm_password']:
            raise serializers.ValidationError({
                "password": "Password and Confirm Password must match."
            })

        # ✅ Terms check
        if not attrs.get('terms_accepted', False):
            raise serializers.ValidationError({
                "terms_accepted": "Please accept the terms and conditions."
            })

        return attrs

    def create(self, validated_data):
        validated_data.pop('confirm_password')  # Don't store confirm_password
        user = CustomUser.objects.create_user(**validated_data)
        return user

        # This is to remove the field confirm password because we don't need it to be stored in the database
        validated_data.pop('confirm_password')
        
        user = User.objects.create_user(**validated_data)
        return user