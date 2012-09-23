# Create your views here.

from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, world. You're at the index.")

def all(request):
	return HttpResponse("all you ever wanted")

def stock_view(request):
	return HttpResponse("stock number...")