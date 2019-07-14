from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    return render(request ,'first_app/index.html')

def create(request):
    print("####" *20)
    if ('word' not in request.session):
        request.session['word'] = [{"word": request.POST['word'], "color": request.POST['color'], "font": request.POST['font']}]
    else:
        temp_list = request.session['word']
        temp_list.append({"word": request.POST['word'], "color": request.POST['color'], "font": request.POST['font']})
        request.session['word'] = temp_list
    return redirect('/')

def reset(request):
    print('here')
    del request.session['word']
    return redirect('/')
