if __name__ == '__main__':
    n = int(input())
    student_marks = {}
    for _ in range(n):
        name, *line = input().split()
        scores = list(map(float, line))
        student_marks[name] = scores
    query_name = input()

    sumOfNum = 0
    for num in student_marks[query_name]:
        sumOfNum += num

    avg = sumOfNum / len(student_marks[query_name])

    print(format(avg, ".2f"))
