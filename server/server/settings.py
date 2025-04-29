from pathlib import Path
from dotenv import load_dotenv
import os
from datetime import timedelta

load_dotenv()

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-mlf-p#2ijrql))ilf2p25^3cq_+@+)z0-n=q*+z8w1ns)%g)4r'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# allowed host
ALLOWED_HOSTS = [
    'localhost',
    '127.0.0.1',
    'therapia-ln4x.onrender.com',
]

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # Required by allauth
    'django.contrib.sites',

    # Third-party apps
    'rest_framework',           # Django REST Framework
    'rest_framework.authtoken', # Required for dj-rest-auth token auth
    'allauth',                  # Django AllAuth core
    'allauth.account',          # AllAuth account system (signup, login)
    'allauth.socialaccount',    # Optional: Social logins
    'dj_rest_auth',             # REST API login/logout/profile
    'dj_rest_auth.registration',# REST API registration using allauth
    'corsheaders',              # CORS handling
    'rest_framework_simplejwt',

    # Custom apps
    "apps.authentication"
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',  # Must be at the top
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
   'django.contrib.auth.middleware.AuthenticationMiddleware',  # Must come before AccountMiddleware for allAuth
    'allauth.account.middleware.AccountMiddleware',  # allAuth middleware 
    'django.contrib.messages.middleware.MessageMiddleware',
    "corsheaders.middleware.CorsMiddleware", # cors headers middleware
    "django.middleware.common.CommonMiddleware", # cors headers
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'server.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'server.wsgi.application'

# cors headers configuration

CORS_ALLOWED_ORIGINS = [
    "https://example.com",
]

CORS_ALLOW_METHODS = (
    "DELETE",
    "GET",
    "OPTIONS",
    "PATCH",
    "POST",
    "PUT",
)

CORS_ALLOW_HEADERS = (
    "accept",
    "authorization",
    "content-type",
    "user-agent",
    "x-csrftoken",
    "x-requested-with",
)


# Database
# https://docs.djangoproject.com/en/5.1/ref/settings/#databases

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': BASE_DIR / 'db.sqlite3',
#     }
# }

# posgresSQL

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.getenv('DB_NAME'),         # Replace with your DB name
        'USER': os.getenv('DB_USER'),        # Replace with your DB username
        'PASSWORD': os.getenv('DB_PASSWORD'),    # Replace with your DB password
        'HOST': os.getenv('DB_HOST'),
        'PORT': os.getenv('DB_PORT'),                 # Default PostgreSQL port
    }
}

# Password validation
# https://docs.djangoproject.com/en/5.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

# Email settings (example for using Gmail's SMTP server)
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = 'your-email@gmail.com'  # Replace with your email
EMAIL_HOST_PASSWORD = 'your-email-password'  # Replace with your email password
DEFAULT_FROM_EMAIL = 'your-email@gmail.com'  # Default sender email


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.1/howto/static-files/

STATIC_URL = '/static/'

STATICFILES_DIRS = [
    BASE_DIR / 'static/'
]

# Always define STATIC_ROOT for production deployment
STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles")

# This only applies in production mode (DEBUG=False)
if not DEBUG:
    STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"

EMAIL_FILE_PATH = '/tmp/django-emails'
EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

# Default primary key field type
# https://docs.djangoproject.com/en/5.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# Site ID is required for allauth
SITE_ID = 1

AUTH_USER_MODEL = 'authentication.CustomUser'

# Add REST Framework settings
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ],
}

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=5),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=1),
}


# For development, you might want to allow all origins
CORS_ALLOW_ALL_ORIGINS = DEBUG # For production, this will be set to False which would mean DEBUG is set to False