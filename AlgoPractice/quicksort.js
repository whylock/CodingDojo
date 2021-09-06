function partition(arr, start = 0, end = arr.length - 1) {
	let pivotVal = arr[end];
	let index = start;
	for (let i = start; i < arr.length; i++)
		if (pivotVal > arr[i]) {
			[arr[index], arr[i]] = [arr[i], arr[index]];
			index++
		}
		[arr[index], arr[end]] = [arr[end], arr[index]]
	return index;
}

// console.log(quicksort([2, 5, 11, 7, 4, 8, 13, 6, 10,11]));


function quicksort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		let pivot = partition(arr, left, right);

		// Left Array
		quicksort(arr, left, pivot - 1);
		
		// Right Array

		quicksort(arr, pivot + 1, right);
	}
	return arr;
}



function generateArray(length, min = -100, max = 100) {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * (max + 1  - min) + min));
    } 
	console.log(array)
    return array;
}

console.log(quicksort(generateArray(9)));
// console.log(quicksort(generateArray(20)));
// console.log(quicksort(generateArray(20)));
// console.log(quicksort(generateArray(20)));
// console.log(quicksort(generateArray(20)));

// console.log(quicksort([2, 5, 1, 7, 4, 8, 13, 6, 10, 9, -1, 12]));
