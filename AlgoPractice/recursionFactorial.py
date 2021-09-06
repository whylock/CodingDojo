x# // 1 -- Understand the problem
# // 2 -- Think of examples
# // 3 -- Break it down
# // 4 -- solve or simplify
# // 5 -- refactor


def factorial(n):
    if n <= 0:
        return 1
    return n * factorial(n - 1)


# BASE CASE | RETURN 1
# 1 * factorial(1 - 1)
# 2 * factorial(2 - 1)
# 3 * factorial(3 - 1)
# 4 * factorial(4 - 1)
factorial(5)
