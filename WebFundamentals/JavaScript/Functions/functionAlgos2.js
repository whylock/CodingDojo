// 1.
function bigify(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			arr[i] = "big";
		}
	}
	return arr;
}

bigify([-1, 2, 3, 4, 5, 6, -2]);

// =============================================
// 2.
lowHigh([1, 2, 3, 4, 5, 6, 7, 8]);

function lowHigh(arr) {
	let low = arr[0];
	let high = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > high) {
			high = arr[i];
		}
		if (low > arr[i]) {
			low = arr[i];
		}
	}
	console.log(low);
	return high;
}

lowHigh([1, 2, 3, 4, 5, 6, 7, 8]);

// ==========================================
// 3.

function pReturn(arr) {
	console.log(arr[arr.length - 2]);

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 != 0) {
			return arr[i];
		}
	}
}

pReturn([2, 4, 6, 8, 9]);

// ===========================================
// 4.

// Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function doubler(arr) {
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		var temp = arr[i] * 2;
		newArr.push(temp);
	}
	console.log(arr);
	console.log(newArr);
	return newArr;
}

doubler([5, 10, 20]);

// ============================================
// 5.

// Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function countPositives(arr) {
	var counter = 0;
	for (var i = 0; i <= arr.length; i++) {
		if (arr[i] > 0) {
			counter++;
		}
	}
	arr[arr.length - 1] = counter;
	return arr;
}

countPositives([-1, 1, 1, 1]);

// ===============================================
// 6.
// Evens and Odds - Create a function that accepts an array. Every time that array has three odd values in a row, print "That's odd!".Every time the array has three evens in a row, print "Even more so!".

function evenOdds(arr) {
	let evenCounter = 0;
	let oddCounter = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			evenCounter++;
			oddCounter = 0;
		} else {
			oddCounter++;
			evenCounter = 0;
		}
		if (evenCounter == 3) {
			console.log("Even more so!");
			oddCounter = 0;
		} else if (oddCounter == 3) {
			console.log("That's Odd!");
			evenCounter = 0;
		}
	}
}

evenOdds([1, 1, 1, 1, 1, 1, 5]);

// ===============================================
// 7.
// Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.

function incrementSecs(arr) {
	//                             add 1
	for (var i = 0; i < arr.length; i++) {
		// whose index is odd
		if (i % 3 == 0) {
			// add 1 to every other element
			arr[i] = arr[i] + 1;
		}
		// console.log each array value
		console.log(arr[i]);
	}
	console.log(arr);
	// return arr
	return arr;
}

incrementSecs([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// ===============================================
// 8.
function prevLengths(arr) {
	for (let i = arr.length; i >= 0; i--) {
		arr[i] = arr[i - 1].length;
	}
	return arr;
}

prevLengths(["hello", "dojo", "awesome"]);

// ================================================
// 9.
function addSeven(arr) {
	var newArr = [];
	for (var i = 1; i < arr.length; i++) {
		newArr.push(arr[i] + 7);
	}
	return newArr;
}

addSeven([2, 3, 4, 5, 6, 7]);

// =================================================
// 10.

function reversify(arr) {
	for (var i = 0; i < arr.length / 2; i++) {
		var temp = arr[i];
		console.log(arr[i]);
		arr[i] = arr[arr.length - 1 - i];
		console.log(arr);
		arr[arr.length - 1 - i] = temp;
		console.log(arr);
	}
	console.log(arr);
	return arr;
}

reversify([1, 2, 3, 4, 5, 6]);

// ==================================================
// 11.
function allNegs(arr) {
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		newArr.push(-Math.abs(arr[i]));
	}
	return newArr;
}

allNegs([1, 2, 3, 4, 5, 6, 7]);

// ====================================================
// 12.
function hungry(arr) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == "food") {
			console.log("yummy");
		} else {
			sum++;
		}
	}
	if (sum == arr.length) {
		console.log("I'm hungry");
	}
}
hungry([1, 2, 3, 4, 5]);
hungry([1, "food", "food", 4, "food"]);

// ===================================================
// 13.
var array = [true, 42, "Ada", 2, "pizza"];
var nums = [1, 2, 3, 4, 5, 6];
function swapToCenter(arr) {
	var temp = arr[0];
	arr[0] = arr[arr.length - 1];
	console.log(arr);
	arr[arr.length - 1] = temp;
	console.log(arr);
	var temp2 = arr[2];
	arr[2] = arr[arr.length - 3];
	console.log(arr);
	arr[arr.length - 3] = temp2;
	return arr;
}
console.log(swapToCenter(array));
console.log(swapToCenter(nums));

//  =====================================================
// 14.

function bigUps(arr, num) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i] * num;
	}
	return arr;
}

console.log(bigUps([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));
