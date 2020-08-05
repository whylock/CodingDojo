from store import Store
from products import Products

# print(store.Store)
# print(products.Products)


store1 = Store("shawn")
store1.add_product("new", 10, "shoe")
store1.add_product("old", 10, "shoe")
store1.add_product("running", 10, "shoe")
store1.add_product("dress", 10, "shoe")
store1.add_product("sneaker", 10, "shoe")
# print(store1.products)
store1.inflation(2)
store1.clearance(10)
# print(store1.products[0])
store1.product_info()
# store1.sell_product(0)
# print(store1.products)
