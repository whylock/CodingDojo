# 1
# Biggie Size - Given a list, write a function that changes all positive numbers in the list to "big".
# Example: biggie_size([-1, 3, 5, -5]) returns that same list, but whose values are now [-1, "big", "big", -5]

def biggie_size(lst):
    for i in range(0, len(lst), 1):
        if lst[i] > 0:
            lst[i] = "big"
    print(lst)


# biggie_size([-1, 3, 5, -5])

# 2
# Count Positives - Given a list of numbers, create a function to replace the last value with the number of positive values. (Note that zero is not considered to be a positive number).


def cPositives(lst):
    counter = 0
    for i in range(0, len(lst), 1):
        if lst[i] >= 1:
            counter += 1
    lst[len(lst)-1] = counter
    print(lst)


# cPositives([1, 2, 3, 4, 5, 6, -1, -4])

# 3

# Sum Total - Create a function that takes a list and returns the sum of all the values in the list.
# Example: sum_total([1,2,3,4]) should return 10
# Example: sum_total([6,3,-2]) should return 7


def sumTotal(lst):
    sum = 0
    for i in range(0, len(lst), 1):
        sum += lst[i]
    print(sum)
    return sum


# sumTotal([1, 2, 3, 4])

# 4

# Average - Create a function that takes a list and returns the average of all the values.x
# Example: average([1,2,3,4]) should return 2.5


def avg(lst):
    sum = 0
    for i in range(0, len(lst), 1):
        sum += lst[i]
    return sum / len(lst)


avg([1, 2, 3, 4])


# 5

# Length - Create a function that takes a list and returns the length of the list.
# Example: length([37,2,1,-9]) should return 4
# Example: length([]) should return 0

def length(lst):
    length = len(lst)
    return length


# length([1, 2, 3, 5])
# length([])

# 6


def min(lst):
    if len(lst) == 0:
        print("False")
        return False
    else:
        for i in range(0, len(lst), 1):
            if lst[i] < 0:
                mini = lst[i]
    print(mini)
    return mini


# min([])
# min([1, 2, 3, 4, 5, 6, -30, -10, -35])


# 7

# Maximum - Create a function that takes a list and returns the maximum value in the list. If the list is empty, have the function return False.
# Example: maximum([37,2,1,-9]) should return 37
# Example: maximum([]) should return False


def max(lst):
    max = lst[0]
    if len(lst) == 0:
        print("False")
        return False
    else:
        for i in range(0, len(lst), 1):
            if lst[i] > max:
                max = lst[i]
    print(max)
    return max


# max([])
# max([1, 2, 3, 4, 5, 6, -30, -10, -35])


# 8

# Ultimate Analysis - Create a function that takes a list and returns a dictionary that has the sumTotal, average, minimum, maximum and length of the list.
# Example: ultimate_analysis([37,2,1,-9]) should return {'sumTotal': 31, 'average': 7.75, 'minimum': -9, 'maximum': 37, 'length': 4 }

def ultimate_analysis(lst):
    ultAnalysis = {}
    ultAnalysis["Total"] = sumTotal(lst)
    ultAnalysis["Average"] = avg(lst)
    ultAnalysis["Minimum"] = min(lst)
    ultAnalysis["Max"] = max(lst)
    ultAnalysis["Length"] = length(lst)
    print(ultAnalysis)


ultimate_analysis([37, 2, 4, -9])


# 9

# Reverse List - Create a function that takes a list and return that list with values reversed. Do this without creating a second list. (This challenge is known to appear during basic technical interviews.)
# Example: reverse_list([37,2,1,-9]) should return [-9,1,2,37]

def reversify(lst):
    for i in range(0, len(lst) // 2, 1):
        temp = lst[i]
        lst[i] = lst[len(lst) - 1 - i]
        lst[len(lst) - 1 - i] = temp
    print(lst)
    return lst


reversify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
reversify([37, 2, 1, -9])
