from django.db import models

# Create your models here.


class Portfolio(models.Model):
	name = models.CharField(max_length = 50)
	def __unicode__( self ):
		return self.name
	

class Stock(models.Model):
	name = models.CharField(max_length=200)
	symbol = models.CharField(max_length=10)
	price = models.FloatField()
	portfolio = models.ForeignKey(Portfolio)
	#pub_date = models.DateTimeField('date published')
	
	def __unicode__(self):
		return self.name

"""
class Choice(models.Model):
	poll = models.ForeignKey(Poll)
	choice = models.CharField(max_length=200)
	votes = models.IntegerField()

	def __unicode__(self):
		return self.choice
		"""