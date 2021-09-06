// 1.
function get() {
	var newArr = [];
	for (let i = 1; i <= 255; i++) {
		newArr.push(i);
	}
	return newArr;
}

get();

// ===================================
// 2.

function evenSum() {
	var sum = 0;
	for (let i = 0; i <= 1000; i++) {
		if (i % 2 == 0) {
			sum += i;
		}
		console.log(sum);
	}
	return sum;
}

evenSum();

// ===================================
// 3

function oddSum() {
	var sum = 0;
	for (let i = 0; i <= 5000; i++) {
		if (i % 2 == 1) {
			sum += i;
		}
		console.log(sum);
	}
	return sum;
}

oddSum();

// ===================================

function arrSum(arr) {
	let sum = 0;
	for (let i = 0; i <= arr.length - 1; i++) {
		sum += arr[i];
	}
	return sum;
}
//      0 1 2

arrSum([1, 2, 5]);

// ===================================

function max(arr) {
	let max = arr[0];
	for (let i = 0; i <= arr.length - 1; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}

max([-3, 3, 5, 7]);

// ====================================

function avg(arr) {
	var sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum / arr.length;
}
avg([1, 3, 5, 7, 20]);

// =====================================

function odds() {
	var arr = [];
	for (let i = 1; i <= 50; i++) {
		if (i % 2 != 0) {
			[arr.push[i]];
		}
	}
	return arr;
}

// =======================================

function greater(n, arr) {
	var counter = 0;
	for (let i = 0; i <= arr.length; i++) {
		if (n < arr[i]) {
			counter++;
		}
	}
	return counter;
}

greater(5, [3, 5, 6, 3, 8, 9, 10]);

// ==================================

function sq(arr) {
	for (let i = 0; i <= arr.length - 1; i++) {
		arr[i] = arr[i] * arr[i];
	}
	return arr;
}

sq([1, 2, 3, 4, 5]);

// ==================================

function negs(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			arr[i] = 0;
		}
	}
	return arr;
}

negs([-1, -2, 5, 6, 7, -10]);

// ==================================

function mma(arr) {
	var min = 0;
	var max = 0;
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (min > arr[i]) {
			min = arr[i];
		}
		sum += arr[i];
	}
	return [min, max, sum / arr.length];
}

console.log(mma([1, 5, 10, -2]))

// ====================================

function swapValue(arr) {
	let temp = arr[arr.length - 1];
	arr[arr.length - 1] = arr[0];
	arr[0] = temp;
	return arr;
}

swapValue([1, 2, 3, 4, 5]);

// =====================================

function numToStr(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			arr[i] = "Dojo";
		}
	}
	return arr;
}

numToStr([-1, 2, 3]);
