from django.conf.urls import url
from . import views	# the . indicates that the views file can be found in the same directory as this file

urlpatterns = [
    url(r'^$', views.index),
    url(r'^create/', views.create),
    url(r'^authors/', views.author),
    url(r'^createAuthor/', views.createAuthor),
    url(r'^book/(?P<id>\d+)', views.book),
    url(r'^author/(?P<id>\d+)', views.authorView),
    url(r'^addAuthor/(?P<id>\d+)', views.addAuthor),
    url(r'^addbook/(?P<id>\d+)', views.addbook)






]
