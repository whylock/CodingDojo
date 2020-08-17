from django.urls import path
from . import views

urlpatterns = [
    path('', views.root),
    path('authors', views.author),
    path('books/<int:id>', views.books, name='books'),
    path('authors/<int:id>', views.authors, name='authors'),
    path('addbook', views.addbook),
    path('addauthor', views.addauthor),
]
