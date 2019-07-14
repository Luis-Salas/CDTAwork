from django.shortcuts import render

# Create your views here.
# other imports
from .models import Movie
# # show all of the data from a table
def index(request):
    context = {
    	"all_the_movies": Movie.objects.all()
    }
    return render(request, "first_app/index.html", context)
