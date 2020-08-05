# “ Parens Valid
# Create a function that, given an input string str, returns a boolean
# whether parentheses in str are valid. Valid sets of parentheses always
# open before they close, for example. For "Y(3(p)p(3)r)s", return true.
# Given "N(0(p)3", return false: not every parenthesis is closed. Given
# "N(0)t )0(k", return false, because the underlined ")" is premature:
# there is nothing open for it to close.”

# If closed paren outnumber open parens, we can return False.
# End number of parens should be equal

def parensValid(str):
    parenCounter = {
        "(": 0,
        ")": 0
    }

    for chars in str:
        if chars == ")":
            parenCounter[chars] += 1
            if parenCounter[")"] > parenCounter["("]:
                return False
        elif chars == "(":
            parenCounter[chars] += 1

    if parenCounter[")"] == parenCounter["("]:
        return True
    else:
        return False


print(parensValid("Y(3(p)p(3)r)s"))
print(parensValid("Y(3(p)p(3)r)s"))
print(parensValid("Y(3(p)p(3r)s"))
