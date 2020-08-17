from django.shortcuts import render, redirect
from . models import *

# Create your views here.


def root(request):
    books = Book.objects.all()
    context = {
        'book': books,
    }
    return render(request, 'index.html', context)


def author(request):
    authors = Author.objects.all()
    context = {
        'author': authors,
    }
    return render(request, 'author.html', context)


def books(request, id):
    current_book = Book.objects.get(id=id)
    if request.POST:
        author = request.POST['author']
        current_book.books.add(author)
    context = {
        'books': Book.objects.get(id=id),
        'book_author': Book.objects.get(id=id).books.all(),
        'other_author': Author.objects.exclude(books=current_book).all(),
    }
    return render(request, 'books.html', context)


def authors(request, id):
    current_author = Author.objects.get(id=id)
    if request.POST:
        book = request.POST['book']
        current_author.books.add(book)
    context = {
        'authors': Author.objects.get(id=id),
        'author_book': Author.objects.get(id=id).books.all(),
        'other_book': Book.objects.exclude(books=current_author).all(),
    }
    return render(request, 'authors.html', context)


def addbook(request):
    Book.objects.create(
        title=request.POST['title'],
        desc=request.POST['desc'],
    )
    return redirect('/')


def addauthor(request):
    Author.objects.create(
        first_name=request.POST['first_name'],
        last_name=request.POST['last_name'],
        notes=request.POST['desc'],
    )
    return redirect('/')
