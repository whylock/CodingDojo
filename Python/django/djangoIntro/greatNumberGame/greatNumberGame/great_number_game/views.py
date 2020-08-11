from django.shortcuts import render, redirect
import random

# Create your views here.


def root(request):
    if 'num' not in request.session:
        request.session['num'] = random.randint(1, 100)
    if 'tries' not in request.session:
        request.session['tries'] = 0
    print('=' * 40, request.session['num'])
    return render(request, 'index.html')


def guess(request):
    request.session['guess'] = int(request.POST['guess'])
    print(request.POST)

    if request.session['guess'] > request.session['num']:
        request.session['alert'] = "Too High"
        print(request.session['alert'])
        request.session['tries'] += 1
        return redirect("/")

    elif request.session['guess'] < request.session['num']:
        request.session['alert'] = "Too Low"
        print(request.session['alert'])
        request.session['tries'] += 1
        return redirect("/")

    else:
        request.session['alert'] = "Correct"
        print(request.session['alert'])
        request.session['tries'] += 1
        return redirect("/")


def leaderboard(request):
    context = {}
    leaderboard = []
    context['Name'] = leaderboard.append(request.POST['leaderboard'])
    context['Attempts'] = leaderboard.append(request.session['tries'])
    print(context)
    return render(request, 'leaderboard.html', {'context': Name}, {'Attempts': Attempts})


def reset(request):
    del request.session['num']
    del request.session['alert']
    return redirect('/')
