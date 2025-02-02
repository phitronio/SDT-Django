from django.contrib import admin
from django.urls import path, include
from debug_toolbar.toolbar import debug_toolbar_urls
from .views import api_root_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', api_root_view),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('api/v1/', include('api.urls'), name='api-root')
] + debug_toolbar_urls()
