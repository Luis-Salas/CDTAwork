from django.shortcuts import render, redirect
from .models import Book, Author

# Create your views here.
def index(request):
        context ={
            'all_books': Book.objects.all()
            }
        return render(request, "start_app/index.html", context)

def create(request):
    print(request.POST)
    Book.objects.create(title= request.POST['title'],description=request.POST['description'])
    return redirect('/')

def book(request, id):
    context={
        'authors': Author.objects.all(),
        'book': Book.objects.get(id=id),
        'author': Book.objects.get(id=id).authors.values()
    }
    return render(request, "start_app/book.html",context)

def author(request):
    context = {
        'authors' : Author.objects.all()
    }
    return render(request, "start_app/allauthor.html", context)

def createAuthor(request):
    print(request.POST)
    Author.objects.create(name= request.POST['name'], notes = request.POST['notes'])
    return redirect('/authors/')

def authorView(request, id):
    context = {
        # 'books' : Book.objects.get()
        'author': Author.objects.get(id=id),
        'books': Book.objects.all(),
        'book': Author.objects.get(id=id).books.values()
    }
    return render(request, "start_app/author.html",context)

def addAuthor(request,id):
    auth = Author.objects.get(id=request.POST['id'])
    bk = Book.objects.get(id=id)
    auth.books.add(bk)		# add the book to this publisher's list of books
    return redirect('/book/'+ str(id) +'/')

def addbook(request,id):
    print('EREERESRASERA')
    auth = Author.objects.get(id=id)
    bk = Book.objects.get(id=request.POST['id'])
    bk.authors.add(auth)
    return redirect('/author/'+ str(id) + '/')
