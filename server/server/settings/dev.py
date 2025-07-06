from .base import *

DEBUG = True

# allowed host
ALLOWED_HOSTS = [
    'localhost',
    '127.0.0.1',
]

# db config
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

CORS_ALLOW_ALL_ORIGINS = DEBUG 


