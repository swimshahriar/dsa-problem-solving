def insertion_sort(arr):
    for j in range(1, len(arr)):
        key = arr[j]

        i = j - 1
       # key >= arr[i] for descending order
        while i >= 0 and key <= arr[i]:
            arr[i+1] = arr[i]
            i -= 1

        arr[i + 1] = key
    return arr


inputArr = [1, 5, 2, 7, 3, 9]
print(insertion_sort(inputArr))
