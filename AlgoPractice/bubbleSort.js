function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Destructuring Assignment for variable swapping
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

function generateArray(length, min = -100, max = 100) {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * (max + 1 - min) + min));
    }
    return array;
}

console.log(bubbleSort(generateArray(20)));
console.log(bubbleSort(generateArray(20)));
console.log(bubbleSort(generateArray(20)));
console.log(bubbleSort(generateArray(20)));
console.log(bubbleSort(generateArray(20)));
