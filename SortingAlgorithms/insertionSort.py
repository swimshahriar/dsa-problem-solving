def insertionSort(arr):
    for i in range(1, len(arr)):
        currentNum = arr[i]

        j = i - 1
        while j >= 0 and currentNum < arr[j]:
            arr[j+1] = arr[j]
            j -= 1

        arr[j+1] = currentNum
        return arr


inputArr = [1, 5, 2, 7, 3, 9]
print(insertionSort(inputArr))
