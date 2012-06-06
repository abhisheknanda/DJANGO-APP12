from django.db import models
from django.contrib import admin

class Book(models.Model):
  isbn = models.CharField(max_length=100, primary_key = True)
  def __str__(self):
	return '%s' % (self.isbn)
  class Admin:
    pass  
  
class User(models.Model):
  username = models.CharField(max_length=30, primary_key = True)
  full_name = models.CharField(max_length=500, blank=True, null = True)
  def __str__(self):
	return '%s' % (self.full_name)
  class Admin:
    pass
  
class Rating(models.Model):
  userId = models.ForeignKey(User)
  bookId = models.ForeignKey(Book)
  rating = models.FloatField(blank=True,null=True)
  '''date = models.DateField()'''
  def __str__(self):
	return '%s' % (self.rating)
  class Admin:
    pass  
	
class Comment(models.Model):
  userId  = models.ForeignKey(User)
  bookId  = models.ForeignKey(Book)
  comment = models.CharField(max_length=500,blank=True,null=True)
  '''date = models.DateField()'''
  def __str__(self):
	return '%s' % (self.comment)
  class Admin:
    pass

class Tag(models.Model):
  userId  = models.ForeignKey(User)
  bookId  = models.ForeignKey(Book)
  tag = models.CharField(max_length=100,blank=True,null=True)
  '''date = models.DateField()'''
  def __str__(self):
	return '%s' % (self.tag)
  class Admin:
    pass
	
admin.site.register(Book)
admin.site.register(User)
admin.site.register(Rating)
admin.site.register(Comment)
admin.site.register(Tag)