from django.urls import path
from . import views

urlpatterns = [
    path('', views.root),
    path('formSubmit', views.formSubmit),
    path('result', views.result),
]
