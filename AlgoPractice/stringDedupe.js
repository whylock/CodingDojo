// Remove duplicate characters(case -sensitive) including punctuation.
// Keep only the last instance of each character.Given "Snaps! crackles! pops!", return "Snrackle ops!".

function stringDedupe(str) {
	let newStr = "";
	dict = {};
	for (let i = str.length - 1; i >= 0; i--) {
		if (dict[str[i]]) {
			dict[str[i]]++;
			continue;
		}
		dict[str[i]] = 1;
		console.log(dict);
		newStr = str[i] + newStr;
	}
	return newStr;
}

console.log(stringDedupe("Snaps! crackles! pops!"));

// function twoLoops(str) {
// 	let newStr = "";
// 	for (let i = 0; i < str.length; i++) {
// 		var dupe = false;
// 		for (let j = i + 1; j < str.length; j++) {
// 			if (str[i] == str[j]) {
// 				dupe = true;
// 			} else {
// 				dupe = false;
// 			}
// 		}
// 		if ((dupe = false)) {
// 			console.log(dupe);
// 			newStr += str[i]
// 		}
// 	}
// 	return newStr;
// }
