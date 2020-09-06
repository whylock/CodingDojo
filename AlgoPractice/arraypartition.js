// Partition Array
// Partition unsorted array in-place. Use arr[0] as pivot val; return idx of pivot. Input [5,4,9,2,5,3] becomes [4,2,3,5,9,5], return 4.

function partition(arr) {
	var start = 0;
	let pivotVal = arr[start];
	for (let i = start + 1; i < arr.length; i++)
		if (pivotVal > arr[i]) {
			[arr[start], arr[i]] = [arr[i], arr[start]];
			start++;
			console.log(arr);
		}
	return start;
}
//
console.log(partition([5, 4, 9, 2, 5, 3]));
//                        i
//                    [4, 5, 9, 2, 5, 3]
//                           i
//                    [4, 5, 2, 9, 5, 3]
//                              i
//                    [4, 2, 5, 9, 3, 5]
//                                 i
//                    [4, 2, 5, 3, 9, 5]

//                    [4, 2, 3, 5, 9, 5]

//                    [4, 2, 3, 5, 5, 9]
