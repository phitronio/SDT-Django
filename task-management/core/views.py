from django.shortcuts import render

# Create your views here.


def home(request):
    return render(request, 'home.html')

def no_permission(request):
    return render(request, 'no_permission.html')