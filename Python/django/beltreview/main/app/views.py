from django.shortcuts import render, redirect
from django.contrib import messages
from . models import *

# Create your views here.


def index(request):
    if 'current_user' not in request.session:
        request.session['current_user'] = None
        return render(request, 'index.html')
    else:
        return redirect('/dashboard')


def register(request):
    valid = User.objects.regValidator(request.POST)
    if request.method != 'POST':
        return redirect('/')
    else:
        print(request.POST)
        if len(valid['errors']) > 0:
            for key, value in valid['errors'].items():
                messages.error(request, value)
            return redirect('/')
        else:

            request.session['current_user'] = valid['users'].id
            messages.add_message(request, messages.SUCCESS, f'Successfully registered!')
            return redirect('/dashboard')


def login(request):
    pass


def logout(request):
    request.session.clear()
    return redirect('/')


def dashboard(request):
    if 'current_user' not in request.session:
        request.session['current_user'] = None
        messages.add_message(request, messages.INFO, "You must be logged in to view this page.")
        return redirect('/')
    print(request.session['current_user'])
    context = {
        'current_user': User.objects.get(id=request.session['current_user'])
    }

    return render(request, 'dashboard.html', context)


def createitem(request):
    if 'current_user' not in request.session:
        request.session['current_user'] = None
        messages.add_message(request, messages.INFO, "You must be logged in to view this page.")
        return redirect('/')
    return render(request, 'create.html')


def additem(request):
    request.session['current_user'] = id
    valid = Item.objects.itemValidator(request.POST, id)
    if 'current_user' not in request.session:
        request.session['current_user'] = None
        messages.add_message(request, messages.INFO, "You must be logged in to view this page.")
        return redirect('/')
    valid = Item.objects.itemValidator(request.POST)
    if request.method != 'POST':
        return redirect('/dashboard')
    else:
        if len(valid['errors']) > 0:
            for key, value in valid['errors'].items():
                messages.error(request, value)
            return redirect('/wish_items/create')
        else:
            return redirect('/dashboard')
    context = {
        'current_user': User.objects.get(id=request.session['current_user'])
    }
