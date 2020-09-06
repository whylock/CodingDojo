function partition(arr, start = 0, end = arr.length - 1) {
	let pivotVal = arr[start];
	index = start;
	for (let i = start + 1; i < arr.length; i++)
		if (pivotVal > arr[i]) {
			[arr[index], arr[i]] = [arr[i], arr[index]];
			index++;
		}
	return start;
}

function quicksort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		let pivot = partition(arr, left, right);
		//left
		quicksort(arr, left, pivot - 1);
		//right

		quicksort(arr, pivot + 1, right);
	}
	return arr;
}

console.log(quicksort([2, 1, 5, 7, 4, 8, 9, 6, 10, 13, 15]));
