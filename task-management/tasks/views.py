from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def home(request):
    return HttpResponse("Welcome to the task management system")


def contact(request):
    return HttpResponse("<h1 style='color: red'>This is contact page</h1>")


def show_task(request):
    return HttpResponse("This is our task page")


def show_specific_task(request, id):
    print("id", id)
    print("id type", type(id))
    return HttpResponse(f"This is specific task page {id} ")
