def validParenthesis(s):
    for i in s:
        if i not in ["[","{","(","]","}",")"]:
            return False
    squareLeft=0
    squareRight=0
    curlLeft=0
    curlRight=0
    parenthesisLeft=0
    parenthesisRight=0
    for i in s:
        if i=="[":
            squareLeft+=1
        elif i=="{":
            curlLeft+=1
        elif i=="(":
            parenthesisLeft+=1
        elif i=="}":
            curlRight+=1
        elif i=="]":
            squareRight+=1
        elif i==")":
            parenthesisRight+=1
    if curlLeft!=curlRight or parenthesisLeft!=parenthesisRight or squareLeft!=squareRight:
        return False
    lst=[]
    for i in s:
        if i in ["[","{","("]:
            lst.append(i)
        elif (i not in ["[","{","("]) and (len(lst)==0):
            return False
        else:
            if (i=="}" and lst[-1]=="{") or (i==")" and lst[-1]=="(") or (i=="]" and lst[-1]=="["):
                lst.pop()
                continue
            else:
                return False
    return True
string=input("Enter the string:")
print(validParenthesis(string))