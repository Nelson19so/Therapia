from .base import *

DEBUG = False

# allowed host
ALLOWED_HOSTS = [
    'therapia-ln4x.onrender.com',
]


# postgresSQL
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.getenv('DB_NAME'),         # Replace with DB name
        'USER': os.getenv('DB_USER'),        # Replace with DB username
        'PASSWORD': os.getenv('DB_PASSWORD'),    # Replace with DB password
        'HOST': os.getenv('DB_HOST'),
        'PORT': os.getenv('DB_PORT'),                 # Default PostgreSQL port
    }
}


# This only applies in production mode (DEBUG=False)
if not DEBUG:
    STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"

CORS_ALLOW_ALL_ORIGINS = DEBUG 