from django.shortcuts import render, HttpResponse, redirect
from datetime import datetime
  # the index function is called when root is visited
def index(request):
    time = datetime.now()
    localtime12 = time.strftime("%I:%M:%S %p")
    context = {
        'time' : localtime12
    }
    request.session['time'] = localtime12
    return render(request, "main_app/index.html", context)
