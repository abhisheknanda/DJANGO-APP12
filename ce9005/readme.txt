The django-plugin project is built around the idea of pluggable templates that can be used to add the functionality to comment, rate and tag any set of objects. This is an AJAX based plug-in which ensures that the page does not reload each time the user executes a task. This project is released under the GNU GPL license, please look at the license file in the project for more details. 

The ‘home.html’ page provides a sample of how this plug-in can be used.  In this sample we have used a ‘book’ as an object on which the user can comment, rate and tag. This object should be modified based on your need.
Note: The plug-in is in the form of a DJANGO project. If you are not familiar with the structure of a DJANGO project, please refer to the following page for more details:

--Plug-In Structure

*In addition, to the templates described below, the central logic for the plug-in is in the JavaScript file \public\script.js and in the view file \iFriends\views.py. 
*The \iFriends\models.py file defines the tables where the comments, tags and ratings are stored. It also contains a ‘Book’ model for the sample application (this can be removed in the actual project).
*The \urls.py  file contains the urls which map the JavaScript functions to the functions in views.py. These mappings are important for the AJAX functionalities to work. 

All the templates mentioned below can be found in \templates.

--Instructions for using the plug-in

* If you already have an existing DJANGO project please copy the contents of the public and templates folders to the respective folders in your project. You will have to manually merge the contents of the \urls.py,\settings.py, \iFriends\views.py, and \iFriends\models.py files.

* If you don’t currently have a DJANGO project, you can use this project to build your project. 



--Commenting

* To add the form for posting a new comment you can use the following include statement:
{%include "post_new_comment.html"%}

* To show all the comments for the current object that is being viewed, the following include statement should be used. Any new comment added by the user will also be instantaneously shown by this template. In order to use this template, you will have to modify the\iFriends\ views.py to implement your program logic.
{%include "show_comments.html"%}

--Rating

* To add the form for rating, you can use the following include statement:
{%include "rate_object.html"%}. Once the user successfully rates the object, a confirmation message is shown on the web page.

* To show the average rating for the current object, the following include statement should be used {%include "show_average_rating.html"%}.  In order to use this template, you will have to modify the\iFriends\ views.py to implement your program logic.


--Tagging

* To add the form for rating, you can use the following include statement:
{%include “post_new_tag.html”}

* To show the tags for the current object, the following include statement should be used {%include "show_tags"%}.  In order to use this template, you will have to modify the\iFriends\ views.py file to implement your program logic.

