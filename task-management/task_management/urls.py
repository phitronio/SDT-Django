from django.contrib import admin
from django.urls import path, include
from debug_toolbar.toolbar import debug_toolbar_urls


urlpatterns = [
    path('admin/', admin.site.urls),
    path("tasks/", include("tasks.urls")),
    path("users/", include('users.urls'))
]+debug_toolbar_urls()

# Ctrl + Shift + P
