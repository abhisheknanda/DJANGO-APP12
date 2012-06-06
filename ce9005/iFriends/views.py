from django.shortcuts import HttpResponse
from django.utils import simplejson
from django.shortcuts import render_to_response
from models import *

#Note: all the parameters are dummy parameters, they should be modified appropriately based on the object id

#home page for the sample application
def home_page(request):
	comments = filter_comments('1')
	tags = filter_tags('1')
	book = Book.objects.get(isbn='1')
	rating = get_average_rating('1')
	return render_to_response('home.html', {'book':book, 'comments':comments, 'average_rating':rating, 'num':10, 'tags':tags})
	
#handles the rating request, saves the rating and sends back a confirmation message
def ajax_rate(request):
	rating_number = request.POST['rating']
	rating_message = "Thanks for rating"
	rating = Rating()
	rating.userId = User.objects.get(username = '1')
	rating.bookId = Book.objects.get(isbn = '1')
	rating.rating = rating_number
	rating.save()
	return HttpResponse(simplejson.dumps({'rating_message':rating_message}), mimetype='application/javascript')

#handles the comment request, saves the comment and sends back the same comment so that it can be posted on the page
def ajax_post_comment(request):
	comment = Comment()
	comment.userId = User.objects.get(username = '1')
	comment.bookId = Book.objects.get(isbn = '1')
	comment.comment = request.POST['posted_comment']
	comment.save()
	return HttpResponse(simplejson.dumps({'posted_comment':comment.comment}), mimetype='application/javascript')

#handles the tagging request, saves the tag and sends back the tag so that it can be posted on the page
def ajax_post_tag(request):
	tag = Tag()
	tag.userId = User.objects.get(username = '1')
	tag.bookId = Book.objects.get(isbn = '1')
	tag.tag = request.POST['posted_tag']
	tag.save()
	return HttpResponse(simplejson.dumps({'posted_tag':tag.tag}), mimetype='application/javascript')

#returns the comments for an object with the particular id
def filter_comments(id):
	comments = Comment.objects.filter(bookId = id)
	return comments

#returns the tags for an object with the particular id
def filter_tags(id):
	tags = Tag.objects.filter(bookId = id)
	return tags

#returns the average rating for an object
def get_average_rating(id):
	ratings = Rating.objects.filter(bookId = id)
	sum = 0.0
	count = 0
	for rating in ratings:
		sum = sum + rating.rating
		count = count + 1
	return (sum/count)