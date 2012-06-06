from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('ce9005.iFriends.views',
    # Examples:
    # url(r'^$', 'iFriends.views.home', name='home'),
    # url(r'^iFriends/', include('iFriends.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),
	url(r'^ajax_rate/$','ajax_rate'),
	url(r'^ajax_post_comment/$','ajax_post_comment'),
	url(r'^ajax_post_tag/$','ajax_post_tag'),
	url(r'^home/','home_page')
)
urlpatterns += patterns('django.views.static',
    (r'^public/(?P<path>.*)$','serve',{'document_root': 'C:/Users/Abhishek/Desktop/Django-App/ce9005/ce9005/public/'}),
)