from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from django.contrib import messages
import bcrypt
from .models import *

# Create your views here.


def index(request):
    return render(request, 'index.html')


def login(request):
    if request.method != "POST":
        return redirect("/")
    valid = User.objects.loginValidator(request.POST)
    print(valid)
    if len(valid['error']) > 0:
        for key, value in valid['error'].items():
            messages.error(request, value)
        return redirect("/")
    else:
        request.session["user_id"] = valid["user"].id
        return redirect("/success")


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
        request.session['user_id'] = regUser.fname
        return redirect('/success')


def success(request):
    if 'user_id' not in request.session:
        return redirect('/')
    context = {
        'regUser': User.objects.get(id=request.session['user_id'])
    }
    return render(request, 'success.html', context)


def logout(request):
    request.session.clear()
    return redirect('/')
