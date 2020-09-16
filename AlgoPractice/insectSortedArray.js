// Intersect Sorted Array
// Efficiently combine two sorted arrays into an array containing the sorted multiset intersection of the two.
// Example: given and, return [2, 2, 7].

function intersectSortedArray(arr1, arr2) {
    var i = 0, j = 0, newArr = []
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] == arr2[j]) {
            newArr.push(arr1[i])
            i++
            j++
        } else if (arr1[i] > arr2[j]) {
            j++
        } else {
            i++
        }
    }
    return newArr
}

console.log(intersectSortedArray([1, 2, 2, 2, 7, 7],[2, 2, 6, 6, 7]))