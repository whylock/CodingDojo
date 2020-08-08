def coinChange(amount):
    output = {"quarter": 0, "dime": 0, "nickel": 0,"penny": 0,}

    if amount >= 0:
        while amount >= 25:
            amount -= 25
            output['quarter'] += 1
        while amount >= 10:
            amount -= 10
            output['dime']+=1
        while amount >= 5:
            amount -= 5
            output['nickel']+=1
        while amount >= 1:
            amount -= 1
            output['penny']+=1
    return output

print(coinChange(154506))
