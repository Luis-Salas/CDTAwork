from django.shortcuts import render,redirect

# Create your views here.
def index(request):
    return render(request, "first_app/index.html")

def submit(request):
    request.session['name'] = request.POST['name']
    request.session['location'] = request.POST['location']
    request.session['comment'] = request.POST['comment']
    return redirect('/result')
def result(request):
    if(request.session['count'] == None):
        request.session['count'] = 0
    else:
        request.session['count'] += 1
    return render(request, "first_app/result.html")
