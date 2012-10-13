# Create your views here.

from django.http import HttpResponse
from portfolios.models import Portfolio

def index(request):
	portfolio_list = Portfolio.objects.all()
	output = ','.join([p.name for p in portfolio_list])
  	#return HttpResponse("Hello, world. You're at the index.")
  	return HttpResponse(output)

def all(request):
	return HttpResponse("all you ever wanted")

def stock_view(request, stock_id):
	return HttpResponse('stock number... %s' % stock_id)