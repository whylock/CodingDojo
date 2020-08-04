# 1
def a():
    return 5


print(a())

# This one returns 5

# 2


def a():
    return 5


print(a()+a())


# This one return a() + a() which is equalivent to saying 5 + 5. So this should return 10.

# 3
def a():
    return 5
    return 10


print(a())


# This should return 5 assuming Python return keyword operates the same  as javaScript and ends the function.

# 4
def a():
    return 5
    print(10)


print(a())

#  This one should just return 5 because the print statement is called after the return keywork which ends the function.

# 6


def a(b, c):
    print(b+c)


print(a(1, 2) + a(2, 3))


# This should return 8 because 1+2 is 3 and 2+3 is 5 and 3+5 is 8.

# 7
def a(b, c):
    return str(b)+str(c)


print(a(2, 5))

# This should return string b+c so 2 and 5 which is 25

# 8


def a():
    b = 100
    print(b)
    if b < 10:
        return 5
    else:
        return 10
    return 7


print(a())

# this will print 100 then since b is > than 10 it will return 10


# 9
def a(b, c):
    if b < c:
        return 7
    else:
        return 14
    return 3


print(a(2, 3))  # 7
print(a(5, 3))  # 14
print(a(2, 3) + a(5, 3))  # 7+14=21

# This should return 7,14, and then 21

# 10


def a(b, c):
    return b+c
    return 10


print(a(3, 5))

# This will return 8

# 11
b = 500
print(b)


def a():
    b = 300
    print(b)


print(b)
a()
print(b)

# Do I only care about the function? If not this will print 500 twice then run the function. The function will print 300 then outside the function again this will print 500

# 12
b = 500
print(b)


def a():
    b = 300
    print(b)
    return b


print(b)
a()
print(b)

# The same thing as the one above

# 13
b = 500
print(b)


def a():
    b = 300
    print(b)
    return b


print(b)
b = a()
print(b)

# Almost the same thing except now when we call the function a() we set it equal to b so when we print b after the function it will 300. So 500 twice and then 300 twice.

# 14


def a():
    print(1)
    b()
    print(2)


def b():
    print(3)


a()

# this will print 1 3 2

# 15


def a():
    print(1)
    x = b()
    print(x)
    return 10


def b():
    print(3)
    return 5


y = a()
print(y)

# prints 1 3 5 returns 10
