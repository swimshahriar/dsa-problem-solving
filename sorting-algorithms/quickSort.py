# method 1
def quick_sort(arr):
    length = len(arr)

    if length <= 1:
        return arr
    else:
        pivot = arr.pop()

    items_greater = []
    items_lower = []

    for i in arr:
        if i < pivot:
            items_lower.append(i)
        else:
            items_greater.append(i)

    return quick_sort(items_lower) + [pivot] + quick_sort(items_greater)


arr = [5, 10, 20, 6, 3, 8]
print(quick_sort(arr))

# method 2


def partition(arr, low, high):
    i = (low - 1)
    pivot = arr[high]

    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]

    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1


def quickSort(arr, low, high):
    if len(arr) == 1:
        return arr

    if low < high:
        pi = partition(arr, low, high)

        quickSort(arr, low, pi-1)
        quickSort(arr, pi+1, high)


arr2 = [4, 5, 76, 1, 0, 56]
n = len(arr2)
quickSort(arr2, 0, n-1)
print(f"Sorted array is {arr2}")
