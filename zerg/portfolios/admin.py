from zerg.portfolios.models import Portfolio, Stock
from django.contrib import admin

class StockInline(admin.StackedInline):
	model = Stock
	extra = 3

class PortfolioAdmin(admin.ModelAdmin):
	fields = []

class StockAdmin(admin.ModelAdmin):
	#fields = ['name', 'symbol', 'portfolio', 'price']
	fieldsets = [
		(None, 		{'fields':['name','symbol']}),
		('Portfolio', {'fields':['portfolio']}),
		('Details', {'fields':['price'],'classes':['collapse']})
		]

	#inlines = [StockInline]

admin.site.register(Portfolio, PortfolioAdmin)
admin.site.register(Stock, StockAdmin)