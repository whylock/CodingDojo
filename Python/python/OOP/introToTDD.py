# import the python testing framework
import unittest
# our "unit"
# this is what we are running our test on


def reverseList(lst):
    for i in range(len(lst) // 2):
        lst[i], lst[len(lst) - 1 - i] = lst[len(lst) - 1 - i], lst[i]
    return lst


def isPalindrome(str):
    for char in range(len(str) // 2):
        if str[char] == str[len(str) - 1 - char]:
            continue
        else:
            return False
    return True


def coinChange(amount):
    quarter = amount//25
    amount -= 25 * quarter;
    dime = amount//10
    amount -= 10 * dime;
    nickel = amount//5
    amount -= 5 * nickel;
    penny = amount//1
    amount -= 1 * penny;

    return [quarter,dime,nickel,penny]

def recursiveFactorial(n):
    if n == 1: return 1
    return n * recursiveFactorial(n-1)

def fibonacci(n):
    if n <=2: return 1
    return fibonacci(n-1) + fibonacci(n-2)

# our "unit tests"
# initialized by creating a class that inherits from unittest.TestCase
class reverseListTests(unittest.TestCase):
#     # each method in this class is a test to be run
    def testOne(self):
        self.assertEqual(reverseList([1,2,3,6,5,4,3,5,7,3,8]), [8, 3, 7, 5, 3, 4, 5, 6, 3, 2, 1])
    def testTwo(self):
        self.assertEqual(reverseList([1,2,7,6,5,4,5,5,7,7,3]), [3, 7, 7, 5, 5, 4, 5, 6, 7, 2, 1])
    def testThree(self):
        self.assertEqual(reverseList([1,3,3,1,6,4,8,5,2,3,10]), [10, 3, 2, 5, 8, 4, 6, 1, 3, 3, 1])

class isPalTests(unittest.TestCase):
    def testOne(self):
        self.assertEqual(isPalindrome("xax"), True)
    def testTwo(self):
        self.assertEqual(isPalindrome("xxx"), True)
    def testThree(self):
        self.assertEqual(isPalindrome("racecar"), True)
    def testFour(self):
        self.assertEqual(isPalindrome("hannah"), True)
    def testFive(self):
        self.assertEqual(isPalindrome("waw"), True)

class coinChangeTests(unittest.TestCase):
    def testOne(self):
        self.assertEqual(coinChange(993), [39, 1, 1, 3])
    def testTwo(self):
        self.assertEqual(coinChange(653), [26, 0, 0, 3])
    def testThree(self):
        self.assertEqual(coinChange(593), [23, 1, 1, 3])
    def testFour(self):
        self.assertEqual(coinChange(263), [10, 1, 0, 3])
    def testFive(self):
        self.assertEqual(coinChange(863), [34, 1, 0, 3])

class factorialTests(unittest.TestCase):
    def testOne(self):
        self.assertEqual(recursiveFactorial(5), 120)
    def testTwo(self):
        self.assertEqual(recursiveFactorial(3), 6)
    def testThree(self):
        self.assertEqual(recursiveFactorial(6), 720)

class fibTests(unittest.TestCase):
    def testOne(self):
        self.assertEqual(fibonacci(5), 5)
    def testTwo(self):
        self.assertEqual(fibonacci(6), 8)
    def testThree(self):
        self.assertEqual(fibonacci(7), 13)

if __name__ == '__main__':
    unittest.main() # this runs our tests




