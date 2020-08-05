from random import randint


class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.checkings_account = BankAccount(0, 0)
        self.savings_account = BankAccount(0.5, 0)

    def make_deposit(self, amount, chosen_account):
        if chosen_account == "checkings":
            self.checkings_account.deposit(amount, chosen_account)
            return self
        elif chosen_account == "savings":
            self.savings_account.deposit(amount, chosen_account)
            return self

    def make_withdrawal(self, amount, chosen_account):
        if chosen_account == "checkings":
            self.checkings_account.withdraw(amount, chosen_account)
            return self
        elif chosen_account == "savings":
            self.savings_account.withdraw(amount, chosen_account)
            return self

    def display_user_balance(self):
        self.checkings_account.display_account_info()
        return self


class BankAccount:
    def __init__(self, int_rate=0.35, balance=0):
        self.account_number = randNum()
        self.routing_number = 345621589
        self.account_balance = balance
        self.int_rate = int_rate

    def deposit(self, amount, chosen_account):
        self.account_balance += amount
        print(f"{self.account_number}, You have deposited: ${amount}. Current {chosen_account.upper()} balance: ${self.account_balance}.")
        return self

    def withdraw(self, amount, chosen_account):
        if self.account_balance < amount:
            print(f"Insufficent funds in {chosen_account.upper()}. Overdraft fee $5.00")
            self.account_balance -= 5
        else:
            self.account_balance -= amount
            print(f"{self.account_number}, You have deposited: ${amount}. Current {chosen_account.upper()} balance: ${self.account_balance}.")
            return self

    def display_account_info(self):
        print(f"Account Information: \nBalance: ${self.account_balance}")
        return self

    def yield_interest(self):
        if self.account_balance > 0:
            self.account_balance *= self.int_rate
            return self


def randNum():

    accNum = randint(1000, 9999) ** 3
    while len(str(accNum)) > 12 and len(str(accNum)) < 12:
        print(accNum)
        return accNum


shawn = User("Shawn", "sl@gmail.com")
nathan = User("nathan", "icebergslim@gmail.com")

nathan.make_deposit(150, "checkings")
shawn.make_deposit(100, "checkings")
nathan.make_deposit(150, "checkings")
shawn.make_deposit(100, "checkings")
