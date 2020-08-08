# “Acronyms
# Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 
# Given " there's no free lunch  -  gotta pay yer way. ", return "TNFL-GPYW".
# Given "Live from New York, it's Saturday Night!", return "LFNYISN”


def acronym(string):
    newstring = "" 
    if string[0] != " ":
        newstring += string[0] 
    for i in range(len(string)):
        if string[i] == " " and string[i+1] != " ":
            newstring += string[i+1]
    return newstring.upper()


print(acronym("united states marine corps"))