from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password

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
        model = User
        fields = ['email', 'phone_number', 'first_name', 'last_name', 'password', 'confirm_password', 'terms_accepted']
        
    def validate(self, attrs):
        if attrs['password'] != attrs['confirm_password']:
            raise serializers.ValidationError({"password": "Password and Confirm Password must be same"})
        
        if not attrs.get('terms_accepted', False):
            raise serializers.ValidationError({"terms_accepted": "Please accept the terms and conditions."})
        
        return attrs
    
    def create(self, validated_data):
        # This is to remove the field confirm password because we don't need it to be stored in the database
        validated_data.pop('confirm_password')
        
        user = User.objects.create_user(**validated_data)
        return user