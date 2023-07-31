def factorial(n: int) -> int :
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

def allPattern1(n: int) -> int :
    if (n < 2) :
        return 1
    return allPattern1(n - 1) + allPattern1(n - 2)

def allPattern2(n: int) -> int :
    sum = 0
    one = n
    two = 0
    while one > 1 :
        sum += factorial(one + two) // (factorial(one) * factorial(two))
        one -= 2
        two += 1
    return sum

print(allPattern1(39))

# print(allPattern2(39))