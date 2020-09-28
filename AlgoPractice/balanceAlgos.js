// Morning Algos:
// Balance Point
// Given an array, return true or false whether or not there is a balance point between indices where one side’s sum is equal to the other’s.
// (Example: [1, 2, 3, 4, 10] -> True(between indicies 3 and 4), but[1, 2, 3, 4, 5] -> false)

// Balance Index
// Given an array, return an index point in which the sums on either side of this index are equal to each other.
// Do NOT include the balance index in either sum.If none exists, return -1.(Example: [-2, 5, 7, 0, 3] -> 2 but[9, 9] should return -1)

function balancePoint(arr) {
    if (arr.length < 3) return false
    
	let sumleft = 0;
	for (let i = 0; i < arr.length - 1; i++) {
        sumleft += arr[i];
        let end = 0
        for (let j = arr.length - 1; j > 1; j--) {
            end += arr[j]
        }
        if (sumleft == end) return true
	return false;
}

console.log(balancePoint([1, 2, 3, 4, 10]));

function balanceIndex(arr) {
	if (arr.length < 3) {
		return -1;
	}
	let total = 0;
	for (let i = 0; i < arr.length - 1; i++) {
		total += arr[i];
		let result = 0;
		for (let j = arr.length - 1; j > i + 1; j--) {
            result += arr[j];
            // console.log( 'J', arr[j])
        }
        // console.log('total', total, 'I', arr[i])
        // console.log('result', result)
        if (total == result) {    
            return i + 1;
		}
    }
    
    
	return -1;
}

// function balIdx(arr) {
//     if (arr.length < 3) return -1
//     let left = 0, right = arr.length - 1, leftTotal = 0, rightTotal = 0
//     while (left - right > 0) {
//         if (leftTotal <= rightTotal) {
            
//         }
//     }
// }

// console.log(balanceIndex([-2, 5, 7, 0, 3]))
// console.log(balanceIndex([2, 5, 7, 0, 3]))
// console.log(balanceIndex([1, 2, 3, 4, 10]))
// console.log(balanceIndex([9, 9]))
