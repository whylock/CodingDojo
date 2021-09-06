# // 1 -- Understand the problem
# // 2 -- Think of examples
# // 3 -- Break it down
# // 4 -- solve or simplify
# // 5 -- refactor


# “ Recursive Fibonacci
# WriterFib(num).Recursivelycompute and return numthFibonaccivalue.Asearlier, treatfirsttwo(num=0, num=1)Fibonaccivals as 0 and 1.Examples: rFib(2) = 1(0 + 1); rFib(3) = 2(1 + 1); rFib(4) = 3(1 + 2);
# rFib(5) = 5 (2+3). rFib(3.65) = rFib(3) = 2, rFib(-2) = rFib(0) = 0.”

# Excerpt From: Martin Puryear. “Algorithm Challenges: E-book for Dojo Students.” iBooks.


def fib(n):
    if n == 0:
        return 0
    if n == 1:
        return 1
    return fib(n - 1) + fib(n - 2)


print(fib(10))


# 0 1 1 2 3 5 8 13 21 34
# 0 1 2 3 4 5 6 7  8   9


#     4            3
fib(5 - 1) + fib(5 - 2)


