# Assignment: User

# Objectives:

# Practice creating a class and making instances from it
# Practice accessing the methods and attributes of different instances

# If you've been following along, you're going to utilize the User class we've been discussing for this assignment.

# For this assignment, we'll add some functionality to the User class:

# make_withdrawal(self, amount) - have this method decrease the user's balance by the amount specified

# display_user_balance(self) - have this method print the user's name and account balance to the terminal
# eg. "User: Guido van Rossum, Balance: $150

# BONUS: transfer_money(self, other_user, amount) - have this method decrease the user's balance by the amount and add that amount to other other_user's balance

#  Create a file with the User class, including the __init__ and make_deposit methods

#  Add a make_withdrawal method to the User class

#  Add a display_user_balance method to the User class

#  Create 3 instances of the User class

#  Have the first user make 3 deposits and 1 withdrawal and then display their balance

#  Have the second user make 2 deposits and 2 withdrawals and then display their balance

#  Have the third user make 1 deposits and 3 withdrawals and then display their balance

#  BONUS: Add a transfer_money method; have the first user transfer money to the third user and then print both users' balances


# If you've been following along, you're going to utilize the User class we've been discussing for this assignment.

# make_withdrawal(self, amount) - have this method decrease the user's balance by the amount specified


class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0

    def make_deposit(self, amount):
        self.account_balance += amount
        print(f"Your account balance is: ${self.account_balance}.")
        return self

    def make_withdrawal(self, amount):
        if amount > self.account_balance:
            print("Insufficent Funds")
        self.account_balance -= amount
        print(f"Your account balance is: ${self.account_balance}.")
        return self

    def display_user_balance(self):
        print(f"You're account balance is ${self.account_balance}")
        return self

    def transfer_funds(self, other_user, amount):
        self.account_balance -= amount
        other_user.account_balance += amount
        print(f"You have successfully transferred funds to {other_user.name} in the amount of ${amount}. Remaining acount balance is: ${self.account_balance}")
        print(f"{other_user.name}, your balance is now: ${other_user.account_balance}")


shawn = User("shawn", "kongfushawn@gmail.com")
nathan = User("nathan", "classiccrozier@gmail.com")
jayson = User("jayson", "weebalert@gmail.com")

shawn.make_deposit(500).make_deposit(100).make_deposit(
    300).make_withdrawal(150).display_user_balance()


nathan.make_deposit(100).make_deposit(
    600).make_withdrawal(300).make_withdrawal(400)

jayson.make_deposit(100).make_withdrawal(
    50).make_withdrawal(20).make_withdrawal(10)

shawn.transfer_funds(jayson, 250)
