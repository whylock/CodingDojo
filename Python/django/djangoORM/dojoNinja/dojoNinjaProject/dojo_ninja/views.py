from django.shortcuts import render, redirect
from .models import Dojo, Ninja

# Create your views here.


def root(request):
    all_dojos = Dojo.objects.all(),

    context = {
        "dojo": all_dojos,
    }

    return render(request, 'index.html', context)


def dojoCreate(request):
    Dojo.objects.create(
        name=request.POST['name'],
        city=request.POST['city'],
        state=request.POST['state'],
    )
    return redirect('/')


def ninjaCreate(request):
    Ninja.objects.create(
        first_name=request.POST['first_name'],
        last_name=request.POST['last_name'],
        dojo=Dojo.objects.get(id=request.POST['dojo']),
    )
    return redirect('/')
