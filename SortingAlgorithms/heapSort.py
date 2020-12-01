# arr = array, n = size of the heap, i = root index
def heapify(arr, n, i):
    largest = i
    l = 2 * i + 1  # left = 2 * i + 1
    r = 2 * i + 2  # right = 2 * i + 2

    # if left child exist and greater than root
    if l < n and arr[largest] < arr[l]:
        largest = l

    # if right child exists and greater than root
    if r < n and arr[largest] < arr[r]:
        largest = r

    # change root, if needed
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]  # swap

        # heapify the root
        heapify(arr, n, largest)


# the main sort function
def heap_sort(arr):
    n = len(arr)

    # build a max heap
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)

    # one by one extract elements
    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]  # swap
        heapify(arr, i, 0)


# initializing the arr and calling the heap_sort function
arr = [12, 11, 13, 5, 6, 7]
heap_sort(arr)
print(f"Sorted array is {arr}")
