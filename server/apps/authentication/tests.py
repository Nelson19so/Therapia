from rest_framework.test import APITestCase
from rest_framework import status
from django.urls import reverse
from apps.authentication.models import CustomUser

class UserSignUpTests(APITestCase):
    def test_user_can_signup_successfully(self):
        url = reverse('UserSignUpListCreateApiView')
        data = {
            'email': 'testuser@example.com',
            'phone_number': '1234567890',
            'first_name': 'Test',
            'last_name': 'User',
            'password': 'TestPassword123!',
            'confirm_password': 'TestPassword123!',
            'terms_accepted': True
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertIn('tokens', response.data)  # Checking that tokens are included
        self.assertIn('access', response.data['tokens'])
        self.assertIn('refresh', response.data['tokens'])

    def test_signup_with_mismatched_passwords(self):
        url = reverse('UserSignUpListCreateApiView')
        data = {
            'email': 'testuser@example.com',
            'phone_number': '1234567890',
            'first_name': 'Test',
            'last_name': 'User',
            'password': 'TestPassword123!',
            'confirm_password': 'DifferentPassword123!',
            'terms_accepted': True
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        
        # Check for the error in the correct structure
        self.assertIn('password', response.data['error'])

    def test_signup_without_accepting_terms(self):
        url = reverse('UserSignUpListCreateApiView')
        data = {
            'email': 'testuser@example.com',
            'phone_number': '1234567890',
            'first_name': 'Test',
            'last_name': 'User',
            'password': 'TestPassword123!',
            'confirm_password': 'TestPassword123!',
            'terms_accepted': False
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        
        # Check that 'terms_accepted' is in the error field
        self.assertIn('terms_accepted', response.data['error'])
