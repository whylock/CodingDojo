from django.shortcuts import render
import datetime
from time import localtime, strftime

# Create your views here.

def index(request):
    currentTime = datetime.datetime.now()
    context = {
        'mdy':  currentTime.strftime('%b %d, %Y'),
        'time': currentTime.strftime('%I:%M %p'),
    }
    return render(request,'index.html', context)

def time_display(request):
    context = {
        'mdy':  currentTime.strftime('%b %d, %Y'),
        'time': currentTime.strftime('%x:%x %p'),
    }
    return render(request,'index.html', context)