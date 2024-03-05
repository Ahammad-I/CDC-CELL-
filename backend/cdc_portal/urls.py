"""cdc_portal URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static

from.views import Login, GoogleLogin, LDAPOAuth, Config

admin.site.site_header = 'CDC Admin Pannel'

urlpatterns = [
    path('accounts/', include('django.contrib.auth.urls')),
    path('admin/', admin.site.urls),
    re_path(r'^ckeditor/', include('ckeditor_uploader.urls')),
    path('api/student/', include("student.urls")),
    path('api/main/', include("main.urls")),
    path('api/company/', include("company.urls")),
    path('api/login/', Login.as_view(), name='login_using_password'),
    path('api/google_login/', GoogleLogin.as_view(), name='login_using_gooogle'),
    path('api/LDAP_login/', LDAPOAuth.as_view(), name='login_using_ldap_creds'),
    path('api/backend_config/', Config.as_view(), name='backend_config')
]

if settings.DEBUG:
    urlpatterns = urlpatterns + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
