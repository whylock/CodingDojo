var testArr = [6, 3, 5, 1, 2, 4];
let total = 0;
for (let i = 0; i < testArr.length; i++) {
	console.log("num: " + testArr[i] + ", " + "sum: " + (total += testArr[i]));
}

var testArr = [6, 3, 5, 1, 2, 4];

for (let i = 0; i < testArr.length; i++) {
	testArr[i] = i * testArr[i];
}
console.log(testArr);
