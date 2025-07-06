from django.contrib import admin
from django.urls import path, include
from allauth.account.views import LoginView, SignupView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),

    # user account url config
    path('api/accounts/', include('apps.accounts.urls.accounts_urls')),

    # user account admin url config
    path('api/admin/', include('apps.accounts.urls.admin_urls')),

    # google auth url config
    path('api/accounts/google/', include('allauth.urls')),

    # google login and register url config
    path('api/accounts/google/login/', LoginView.as_view(), name='google_login'),
    path('api/accounts/google/signup/', SignupView.as_view(), name='google_signup'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

