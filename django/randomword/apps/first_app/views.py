from django.shortcuts import render, redirect
from django.utils.crypto import get_random_string

# Create your views here.
def index(request):
    if(request.session['attempt'] == None):
        request.session['attempt'] = 0
    else:
        request.session['attempt'] += 1
    request.session['word'] = get_random_string(length=14)
    return render(request, "first_app/index.html")
def attempt(request):

    return redirect('/')
