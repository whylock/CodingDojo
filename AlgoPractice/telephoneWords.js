const phone = {
    1: "_,@",
    2: "ABC",
    3: "DEF",
    4: "GHI",
    5: "JKL",
    6: "MNO",
    7: "PQRS",
    8: "TUV",
    9: "WXYZ",
    0: " ",
};

let result = [];

function combinations(digits) {
    if (!digits) return [];

    let current = [];

    genCombinations(current, digits, 0);

    return result;
}

function genCombinations(current, digits, index) {
    if (index === digits.length) {
        result.push(current.join(""));
        return;
    }

    for (const char of phone[digits[index]]) {
        current.push(char);
        genCombinations(current, digits, index + 1);
        current.pop(); 
    }
}

console.log(combinations("235"));
