from django.contrib import admin
from django.urls import path,include
from tasks.views import home,contact

urlpatterns = [
    path('admin/', admin.site.urls),
    path("",  home),
    path("contact/", contact),
    path("tasks/", include("tasks.urls"))
]

# Ctrl + Shift + P