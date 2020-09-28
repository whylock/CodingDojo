// Decimal to Binary String
// Create a function dec2BinStr(value) that converts a number into a string representing that number in binary notation.
// For this challenge,do not use the(very convenient) toString function.
// For example, given the value 35, the function should return "0b100011".


function binaryToString(n) {
    if (n == 0) {
        return 0
    } 
        return n / 2 + 10 * binaryToString(Math.floor(n / 2))
}
console.log("0b" + binaryToString(35))