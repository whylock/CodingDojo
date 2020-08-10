from django.shortcuts import render, redirect

# Create your views here.

def root(request):
    return render(request, 'index.html')

def formSubmit(request):
    print("got POST info.......")
    print(request.POST)
    name_on_form = request.POST['name']
    location_on_form = request.POST['location']
    favlang_on_form = request.POST['favlang']
    check_on_form = request.POST['check']
    radio_on_form = request.POST['radio']
    comment_on_form = request.POST['comment']
    context = {
        "name": name_on_form,
        "location": location_on_form,
        "favlang": favlang_on_form,
        "check": check_on_form,
        "radio": radio_on_form,
        "comment": comment_on_form,
    }
    return render(request,'result.html', context)

def result(request):
    return render(request, "result.html")
