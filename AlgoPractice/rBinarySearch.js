const recursiveBinarySearch = (input, target, left = 0, right = input.length) => {
    var middle = Math.floor((right + left) / 2);
    if (left > right) {
        return false;
    }
    if (input[middle] === target) {
        return true;
    } else if (input[middle] > target) {
        return recursiveBinarySearch(input, target, left, middle - 1);
    } else {
        return recursiveBinarySearch(input, target, middle + 1, right);
    }
};

console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8));
var testArray = [1, 2, 4, 5, 6, 7, 8, 10, 11, 13, 14, 16, 17, 18, 20];

console.log(recursiveBinarySearch(testArray, -1)); // returns false
console.log(recursiveBinarySearch(testArray, 54)); // returns false
console.log(recursiveBinarySearch(testArray, 3)); // returns false
console.log(recursiveBinarySearch(testArray, 9)); // returns false
console.log(recursiveBinarySearch(testArray, 12)); // returns false
console.log(recursiveBinarySearch(testArray, 15)); // returns false
console.log(recursiveBinarySearch(testArray, 19)); // returns false

console.log(recursiveBinarySearch(testArray, 1)); // returns true
console.log(recursiveBinarySearch(testArray, 2)); // returns true
console.log(recursiveBinarySearch(testArray, 4)); // returns true
console.log(recursiveBinarySearch(testArray, 5)); // returns true
console.log(recursiveBinarySearch(testArray, 6)); // returns true
console.log(recursiveBinarySearch(testArray, 7)); // returns true
console.log(recursiveBinarySearch(testArray, 8)); // returns true
console.log(recursiveBinarySearch(testArray, 10)); // returns true
console.log(recursiveBinarySearch(testArray, 11)); // returns true
console.log(recursiveBinarySearch(testArray, 13)); // returns true
console.log(recursiveBinarySearch(testArray, 14)); // returns true
console.log(recursiveBinarySearch(testArray, 16)); // returns true
console.log(recursiveBinarySearch(testArray, 17)); // returns true
console.log(recursiveBinarySearch(testArray, 18)); // returns true
console.log(recursiveBinarySearch(testArray, 20)); // returns true
