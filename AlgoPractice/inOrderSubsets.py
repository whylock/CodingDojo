# // 1 -- Understand the problem
# // 2 -- Think of examples
# // 3 -- Break it down
# // 4 -- solve or simplify
# // 5 -- refactor

# “ String: In-Order Subsets
# Create strSubsets(str). Return an array with every possible in-order character subset of str.
# The resultant array itself need not be in any specific order – it is the subset of letters in each string that must be in the same order
# as they were in the original string. Given "abc", return an array that includes ["", "c", "b", "bc", "a", "ac", "ab", "abc"] (in any order).”

# Excerpt From: Martin Puryear. “Algorithm Challenges: E-book for Dojo Students.” iBooks.


def inOrderSubset(str, subStr='', index=0):
    if len(str) == index:
        return [subStr]
    return inOrderSubset(str, subStr + str[index], index + 1) + inOrderSubset(str, subStr, index + 1)


print(inOrderSubset('abc'))
