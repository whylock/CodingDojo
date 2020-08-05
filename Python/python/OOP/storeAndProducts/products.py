class Products:
    counter = 0

    def __init__(self, name, price, category):
        self.name = name
        self.price = price
        self.category = category
        Products.counter += 1
        self.id = Products.counter

    def update_price(self, percent_change, is_increased):
        if is_increased == True:
            percent_change /= 100
            self.price += percent_change
        elif is_increased == False:
            percent_change /= 100
            self.price -= percent_change

    def print_info(self):
        print(f"ID: {self.id}. Product name is: {self.name}. Current Price is: ${self.price}. Product category is: {self.category}.")
