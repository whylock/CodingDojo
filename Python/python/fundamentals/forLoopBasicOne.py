# 1. Basic - Print all integers from 0 to 150.

for x in range(151):
    print(x)


# 2. Multiples of Five - Print all the multiples of 5 from 5 to 1,000

for j in range(5, 5005):
    if (j % 5) == 0:
        print(j)

# 3. Counting, the Dojo Way - Print integers 1 to 100. If divisible by 5, print "Coding" instead. If divisible by 10, print "Coding Dojo".

for k in range(101):
    if (k % 5) == 0:
        print("Coding")
        if (k % 10) == 0:
            print("Coding Dojo")
    else:
        print(k)


# 5. Whoa. That Sucker's Huge - Add odd integers from 0 to 500,000, and print the final sum.

for s in range(0, 500000, 1):
    if s % 2 != 0:
        print(s)


# 6. Countdown by Fours - Print positive numbers starting at 2018, counting down by fours.

for n in range(2018, -1, -4):
    if n % 2 == 0:
        print(n)

# 7. Flexible Counter - Set three variables: lowNum, highNum, mult. Starting at lowNum and through highNum, print only the integers that are a multiple of mult. For example, if lowNum=2, highNum=9, and mult=3, the loop should print 3, 6, 9 (on successive lines)


lowNum = 2
highNum = 9
mult = 3
for lowNum in range(lowNum, highNum + 1):
    if lowNum % mult == 0:
        print(lowNum)





user = []
name = input("What's your name?")


user.append(name)

print

