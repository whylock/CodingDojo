




function insertionSort(arr) {
	for (var i = 1; i < arr.length; i++) {
		let value = arr[i];
		for (var j = i - 1; j >= 0 && arr[j] > value; j--) {
			console.log(arr)
			arr[j + 1] = arr[j];
		}
		console.log(arr)
		arr[j + 1] = value;
	}
	return arr;
}

function generateArray(length, min = -100, max = 100) {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * (max + 1  - min) + min));
    }
    return array;
}

console.log(insertionSort(generateArray(5)));
// console.log(insertionSort(generateArray(5)));
// console.log(insertionSort(generateArray(5)));
// console.log(insertionSort(generateArray(5)));
// console.log(insertionSort(generateArray(5)));
