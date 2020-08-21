from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from django.contrib import messages
import bcrypt
from .models import *

# Create your views here.


def index(request):
    user = User.objects.all()
    if 'user_id' not in request.session:
        request.session['user_id'] = None
    context = {
        'user': user
    }
    return render(request, 'index.html', context)


def login(request):
    print(request.POST)
    valid = User.objects.loginValidator(request.POST)
    if len(valid["errors"]) > 0:
        for key, value in valid["errors"].items():
            messages.error(request, value)
        return redirect(request.META.get('HTTP_REFERER'))
    return redirect('/success')


def register(request):
    print(request.POST)
    errors = User.objects.regValidator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect(request.META.get('HTTP_REFERER'))
    else:
        hashedpw = bcrypt.hashpw(request.POST['pw'].encode(), bcrypt.gensalt()).decode()
        regUser = User.objects.create(
            fname=request.POST['fname'],
            lname=request.POST['lname'],
            email=request.POST['email'],
            password=hashedpw
        )
        request.session['user_id'] = regUser.id
        return redirect('/success')


def success(request):
    if 'user_id' not in request.session:
        return redirect('/')
    context = {
        'loggedInUser': User.objects.get(id=request.session['user_id'])
    }
    return render(request, 'success.html', context)


def logout(request):
    del request.session['user_id']
    return redirect('/')
