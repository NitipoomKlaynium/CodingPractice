def printSquare(n: int) :
    for i in range(1, n * 2) :
        a = n - abs(i - n)
        for j in range(1, n * 2 ) :
            b = n - abs(j - n)
            print(a if a < b else b, end ="")
        print()

if __name__ == "__main__" :
    printSquare(4)