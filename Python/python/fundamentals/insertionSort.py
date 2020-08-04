# pick the second element in the array

# compare to the one before and if necessary swap

# continue to the next element if it is in the incorrect order, iterate though the sorted portion and insert where it belongs

# repeat


def insectionSort(arr):
    for i in range(1, len(arr)):
        currentVal = arr[i]
        backIndex = i-1
        while backIndex >= 0 and currentVal < arr[backIndex]:
            arr[backIndex + 1] = arr[backIndex]
            backIndex -= 1
        arr[backIndex+1] = currentVal
    return arr


print(insectionSort([2, 8, 1, 76, 20, 10, 30]))
