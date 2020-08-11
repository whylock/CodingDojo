from django.urls import path
from . import views

urlpatterns = [
    path('', views.root),
    path('destroy', views.destroy),
    path('increment_two', views.increment_two),
    path('increment_new', views.increment_new),
]
