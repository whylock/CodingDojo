// Combine Arrays
// Create function combineArrs(arr1, arr2) that sorts two already separately sorted arrays,
// placing the result back into the first provided array. Can you work completely in -place ?

function combineArrs(arr1, arr2) {
	let combined = [];
	let i = 0;
	let j = 0;

	// two already separately sorted arrays
	while (i < arr1.length && j < arr2.length) {
		if (arr2[j] > arr1[i]) {
			combined.push(arr1[i]);
			i++;
		} else {
			combined.push(arr2[j]);
			j++;
		}
	}
	while (i < arr1.length) {
		combined.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		combined.push(arr2[j]);
		j++;
	}
	return combined;
}

// console.log(combineArrs([6, 10], [5, 7, 8, 9]));

// Merge Sort
// Use the combineArrs() function above to construct mergeSortArr() for an unsorted array.
// What are the run - time and space complexities of your mergeSortArr solution ?

// break an array into halves until we have empty arr OR single element in an array
// once we the small arrays merge and sort
// return the merge and sorted array

function mergeSortArr(arr) {
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	let right = mergeSortArr(arr.slice(mid));
	let left = mergeSortArr(arr.slice(0, mid));
	return combineArrs(left, right);
}

console.log(mergeSortArr([5, 4, 7, 3, 9, 8, 2, 1, 6]));
