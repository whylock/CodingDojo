def selectionSort(arr):
    for iterationsLeft in range(0, len(arr)-1, 1):
        min = iterationsLeft
        for i in range(iterationsLeft+1, len(arr), 1):
            if arr[i] < arr[min]:
                min = i
        arr[min], arr[iterationsLeft] = arr[iterationsLeft], arr[min]
    return arr


print(selectionSort([8, 9, 6, 2, 6, 50, 20, 10]))
