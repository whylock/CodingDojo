class Underscore:
    def map(self, iterable, callback):
        new_list = []
        for i in iterable:
            new_list.append(callback(i))
        print(new_list)

    def find(self, iterable, callback):
        for i in range(len(iterable)):
            if callback(iterable[i]) == True:
                print(iterable[i])
                break
        else:
            print(False)

    def filter(self, iterable, callback):
        new_list = []
        for i in range(len(iterable)):
            if callback(iterable[i]) == True:
                new_list.append(iterable[i])
        print(new_list)

    def reject(self, iterable, callback):
        new_list = []
        for i in range(len(iterable)):
            if callback(iterable[i]) != True:
                new_list.append(iterable[i])
        print(new_list)


# you just created a library with 4 methods!
# let's create an instance of our class
_ = Underscore()  # yes we are setting our instance to a variable that is an underscore
evens = _.filter([1, 2, 3, 4, 5, 6], lambda x: x % 2 == 0)
# should return [2, 4, 6] after you finish implementing the code above


_.map([1, 2, 3], lambda x: x*2)  # should return [2,4,6]
# should return the first value that is greater than 4
_.find([1, 2, 3, 4, 5, 6], lambda x: x > 4)
_.filter([1, 2, 3, 4, 5, 6], lambda x: x % 2 == 0)  # should return [2,4,6]
_.reject([1, 2, 3, 4, 5, 6], lambda x: x % 2 == 0)  #  should return [1,3,5]
