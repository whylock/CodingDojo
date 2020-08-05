from products import Products

class Store:
    def __init__(self, name):
        self.name = name
        self.products = []

    def add_product(self, new_product, price, category):
        self.products.append(Products(new_product, price, category))
        return self

    def sell_product(self, id):
        self.products.remove(self.products[id])
        return self

    def inflation(self, percent_increase):
        for i in range(len(self.products)):
            self.products[i].update_price(percent_increase, True)
        return self

    def clearance(self, percent_increase):
        for i in range(len(self.products)):
            self.products[i].update_price(percent_increase, False)
        return self

    def product_info(self):
        for i in range(len(self.products)):
            self.products[i].print_info()
