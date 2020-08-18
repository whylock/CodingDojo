from django.urls import path
from . import views

urlpatterns = [
    path('', views.root),
    path('shows', views.index, name='shows'),
    path('shows/new', views.showsNew, name='newshow'),
    path('shows/create', views.showCreate),
    path('shows/<int:id>', views.showInfo),
    path('shows/<int:id>/edit', views.editShow),
    path('shows/<int:id>/update', views.updateShow),
    path('shows/<int:id>/destroy', views.deleteShow),
]
