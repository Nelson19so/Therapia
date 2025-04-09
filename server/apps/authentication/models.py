from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
import random
import string


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Enter a valide email')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)
        
        return self.create_user(email, password, **extra_fields)
    
class CustomUser(AbstractUser):
    username = None
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15, unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    terms_accepted = models.BooleanField(default=False)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['phone_number']
    
    objects = CustomUserManager()
    
    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'
    
    def __str__(self):
        return self.email
    

class OTP(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    otp = models.CharField(max_length=6)  # OTP of length 6
    created_at = models.DateTimeField(auto_now_add=True)  # Time when OTP was generated
    is_verified = models.BooleanField(default=False)  # Whether OTP is used or not

    def generate_otp(self):
        """Generate a random OTP consisting of digits."""
        return ''.join(random.choices(string.digits, k=6))  # Random 6-digit OTP

    def save(self, *args, **kwargs):
        if not self.otp:
            self.otp = self.generate_otp()  # Automatically generate OTP
        super().save(*args, **kwargs)