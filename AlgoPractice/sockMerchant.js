function sockMerchant(n, arr) {
	let pair = 0;
	let dict = {};
	for (let i = 0; i < arr.length; i++) {
		if (dict[arr[i]]) {
			dict[arr[i]]++;
			continue;
		}
		dict[arr[i]] = 4;
		console.log(dict);
		return dict;
	}
}

console.log(sockMerchant(7, [10, 10, 20, 30, 50, 30, 70]));
