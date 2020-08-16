from django.shortcuts import render, redirect
from . models import User

# Create your views here.


def root(request):
    all_users = User.objects.all()

    context = {
        'user': all_users
    }
    return render(request, 'index.html', context)


def adduser(request):
    User.objects.create(
        first_name=request.POST['first_name'],
        last_name=request.POST['last_name'],
        email_address=request.POST['email'],
        age=request.POST['age'])
    return redirect('/')
