function bracesValid(input) {
    var parens = 0;
    var square = 0;
    var curl = 0;
    for (var i = 0; i < input.length; i++) {
        if (input[i] == "(") {
            parens++;
        }
        if (input[i] == ")") {
            parens--;
        }
        if (input[i] == ")" && parens < 0) {
            return false;
        }
        if (input[i] == "[") {
            square++;
        }
        if (input[i] == "]") {
            square--;
        }
        if (input[i] == "]" && square < 0) {
            return false;
        }
        if (input[i] == "{") {
            curl++;
        }
        if (input[i] == "}") {
            curl--;
        }
        if (input[i] == "}" && curl < 0) {
            return false;
        }
    }
    return parens == 0 && curl == 0 && square == 0;
}

console.log(bracesValid("[(uie])(){}"));
console.log(bracesValid("(q(a)(x)(!(7(xx)(34)(2, 7, 11))))"));
console.log(bracesValid(")("));
console.log(bracesValid("(]"));
console.log(bracesValid("({()}"));
console.log(bracesValid("()[]{}"));
