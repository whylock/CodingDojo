from django.urls import path
from . import views

urlpatterns = [
    path('', views.root),
    path('dojo_create', views.dojoCreate),
    path('ninja_create', views.ninjaCreate),
]
