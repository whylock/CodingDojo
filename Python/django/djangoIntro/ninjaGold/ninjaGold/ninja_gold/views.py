from django.shortcuts import render, redirect, HttpResponse
import datetime
import random

# Create your views here.


def root(request):
    if 'gold' not in request.session:
        request.session['gold'] = 0
    prev = int(request.session['gold'])
    if 'earn' not in request.session:
        request.session['earn'] = ''
    return render(request, 'index.html')


def process_money(request):
    if 'farm' in request.POST:
        gold = random.randrange(10, 20)
        request.session['gold'] += gold
        request.session['earn'] += "Earned " + str(gold) + " gold from farm! " + "(" + str(datetime.datetime.now()) + ")\n"
    print('You hit farm')
    if 'cave' in request.POST:
        gold = random.randrange(5, 10)
        request.session['gold'] += gold
        request.session['earn'] += "Earned " + str(gold) + " gold from cave! " + "(" + str(datetime.datetime.now()) + ")\n"
    print('You hit cave')
    if 'house' in request.POST:
        gold = random.randrange(2, 5)
        request.session['gold'] += gold
        request.session['earn'] += "Earned " + str(gold) + " gold from house!  " + "(" + str(datetime.datetime.now()) + ")\n"
    print('You hit house')
    if 'casino' in request.POST:
        gold = random.randrange(-50, 50)
        request.session['gold'] += gold
        if gold > 0:
            request.session['earn'] += "You entered a casino and won " + str(gold) + " gold from casino! " "(" + str(datetime.datetime.now()) + ")\n"
        else:
            request.session['earn'] += "You entered a casino and lost " + \
                str(abs(gold)) + " gold from casino! " "(" + str(datetime.datetime.now()) + ")\n"
    print('You hit casino')
    print('=' * 40, request.session['gold'])
    return redirect('/')


def reset(request):
    request.session.flush()
    return redirect('/')
