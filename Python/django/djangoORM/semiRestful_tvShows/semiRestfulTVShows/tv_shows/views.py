from django.shortcuts import render, redirect
from . models import *
# Create your views here.


def root(request):
    return redirect('/shows')


def index(request):
    all_shows = Show.objects.all()
    context = {
        'shows': all_shows,
    }
    return render(request, 'index.html', context)


def showsNew(request):
    return render(request, 'new.html')


def showCreate(request):
    new_show = Show.objects.create(
        title=request.POST['title'],
        release_date=request.POST['release_date'],
        network=request.POST['network'],
        desc=request.POST['desc'],
    )
    return redirect(f'/shows/{new_show.id}')


def showInfo(request, id):
    selected_show = Show.objects.get(id=id)
    context = {
        'selected_show': selected_show
    }
    return render(request, 'showsID.html', context)


def editShow(request, id):
    selected_show = Show.objects.get(id=id)
    context = {
        'selected_show': selected_show
    }
    return render(request, 'showEdit.html', context)


def deleteShow(request, id):
    selected_show = Show.objects.get(id=id)
    selected_show.delete()
    return redirect('/shows')


def updateShow(request, id):
    show_to_update = Show.objects.get(id=id)
    show_to_update.title = request.POST['title']
    show_to_update.network = request.POST['network']
    show_to_update.release_date = request.POST['release_date']
    show_to_update.desc = request.POST['desc']
    show_to_update.save()
    return redirect(f'/shows/{id}')
