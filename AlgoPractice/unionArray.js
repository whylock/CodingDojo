// Union Sorted Arrays
// Efficiently combine two already - sorted arrays into a new sorted result containing the multiset union.
// Example: given[1, 2, 2, 2, 7] and[2, 2, 6, 6, 7], return [1, 2, 2, 2, 6, 6, 7].



function unionArray(arr, arr2) {
    let result = [],i = 0,j = 0;
    while(i<arr.length && j<arr2.length) {
        if(arr[i] == arr2[j]) {
            result.push(arr[i]);
            i++;
            j++;
        } else if (arr[i] < arr2[j]) {
            result.push(arr[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    while(arr[i]){
        result.push(arr[i]);
        i++;
    }
    while(arr2[j]){
        result.push(arr2[j]);
        j++;
    }
    return result;
}

console.log(unionArray([1,2,2,2,7,7,7,8,8],[2,2,6,6,7,8]))