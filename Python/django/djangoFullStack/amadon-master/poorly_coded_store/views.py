from django.shortcuts import render
from .models import *


def index(request):
    if 'total_spent' not in request.session:
        request.session['total_spent'] = 0
    if 'products_ordered' not in request.session:
        request.session['products_ordered'] = 0
    context = {
        "all_products": Product.objects.all()
    }
    return render(request, "store/index.html", context)


def checkout(request):
    request.session['checkout_quantity'] = int(request.POST.get('quantity'))

    request.session['total_spent'] += (float(request.POST['price']) * request.session['checkout_quantity'])
    request.session['products_ordered'] += request.session['checkout_quantity']

    quantity_from_form = int(request.POST["quantity"])
    price_from_form = float(request.POST["price"])
    total_charge = quantity_from_form * price_from_form

    context = {
        'product_price': price_from_form,
        'quantity': quantity_from_form,
        'total_charge': total_charge
    }
    print("Charging credit card...")
    Order.objects.create(quantity_ordered=quantity_from_form, total_price=total_charge)
    return render(request, "store/checkout.html", context)
