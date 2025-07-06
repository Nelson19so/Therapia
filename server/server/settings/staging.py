from .base import *

DEBUG = False

# allowed host
ALLOWED_HOSTS = [
    'therapia-ln4x.onrender.com',
]

# postgresSQL
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# This only applies in production mode (DEBUG=False)
if not DEBUG:
    STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"

CORS_ALLOW_ALL_ORIGINS = DEBUG 