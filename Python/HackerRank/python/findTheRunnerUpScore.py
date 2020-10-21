if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    arr = list(arr)
    largeNum = arr[0]

    for num in arr:
        if num > largeNum:
            largeNum = num

    newArr = []
    for num in arr:
        if num != largeNum:
            newArr.append(num)

    secondLargeNum = newArr[0]

    for num in newArr:
        if num > secondLargeNum:
            secondLargeNum = num

    print(secondLargeNum)
