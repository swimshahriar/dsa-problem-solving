def merge_sort(list):
    # print("Splitting ", list)
    if len(list) > 1:
        mid = len(list) // 2
        leftHalf = list[:mid]
        rightHalf = list[mid:]

        merge_sort(leftHalf)
        merge_sort(rightHalf)
        i = j = k = 0
        while i < len(leftHalf) and j < len(rightHalf):
            if leftHalf[i] < rightHalf[j]:
                list[k] = leftHalf[i]
                i += 1
            else:
                list[k] = rightHalf[j]
                j += 1
            k += 1

        while i < len(leftHalf):
            list[k] = leftHalf[i]
            i += 1
            k += 1

        while j < len(rightHalf):
            list[k] = rightHalf[j]
            j += 1
            k += 1
    # print("Merging ", list)


list = [14, 46, 43, 27, 57, 41, 45, 21, 70]
merge_sort(list)
print("Merge Sorted List: ", list)
