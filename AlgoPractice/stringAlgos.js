function wordArray(str) {
	let array = [];
	let newStr = "";
	for (let i = 0; i < str.length; i++) {
		if (str[i] == " " && str[i + 1] !== " ") {
			array.push(newStr);
			newStr = "";
		} else {
			newStr += str[i];
		}
	}
	array.push(newStr);
	return array;
}
// console.log(wordArray("super cool word splitting thing "));

function wordReverse(str) {
	let word = wordArray(str);
	let reversed = "";
	for (let i = word.length - 1; i >= 0; i--) {
		reversed += word[i] + " ";
	}
	return reversed;
}

console.log(wordReverse("super cool word splitting thing "));
