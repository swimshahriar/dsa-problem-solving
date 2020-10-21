if __name__ == '__main__':
    n = int(input())
    output = ""
    if n >= 1 and n <= 150:
        for num in range(1, n + 1):
            output += str(num)
        print(output)
