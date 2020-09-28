// Decimal to Hexadecimal
// Create a function dec2HexStr(value) that converts a number into a string representing
// that number in hexadecimal notation.For this challenge, do not use the(very convenient) toString function.
// For example, given the value 108, the function should return "0x6C".

function decToHex(n) {
    let hex = { 10: "A", 11: "B", 12: "C", 13: 'D', 14: 'E', 15: 'F' };
    
    let array = []
    while (n) {
        array.push(n % 16)
        n = Math.floor(n/16)
    }
    
    array = array.reverse()

    array = array.map(key => key > 10 ? hex[key] : key)

    result = array.join('')

    
    
    return result
}

console.log("0x"+decToHex(108))