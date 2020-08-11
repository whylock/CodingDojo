from django.shortcuts import render, redirect

# Create your views here.

increment = 1

def root(request):
    
    if 'view' in request.session:
        request.session['view'] += 1
    else:
        request.session['view'] = 1
    if 'count' in request.session:
        request.session['count'] += increment
    else:
        request.session['count'] = 1
    return render(request, 'index.html')

def destroy(request):
    del request.session['count']
    del request.session['view']
    return redirect('/')


def increment_two(request):
    if 'count' in request.session:
        request.session['count'] += 1
    else:
        request.session['count'] = 1
    request.session['view'] -= increment
    return redirect('/')

def increment_new(request):
    global increment
    if request.POST['increment']:
        increment = int(request.POST['increment'])
    request.session['view'] -= 1
    request.session['count'] -= increment
    return redirect('/')