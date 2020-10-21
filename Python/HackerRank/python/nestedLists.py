if __name__ == '__main__':
    records = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        records.append([name, score])

    scores = []
    for record in records:
        scores.append(record[1])

    lowestNum = scores[0]
    for num in scores:
        if num < lowestNum:
            lowestNum = num

    scoresArr = []
    for num in scores:
        if num != lowestNum:
            scoresArr.append(num)

    secondLowestNum = scoresArr[0]
    for num in scoresArr:
        if num < secondLowestNum:
            secondLowestNum = num

    studentsArrWithSecondLowestScore = []
    for record in records:
        if record[1] == secondLowestNum:
            studentsArrWithSecondLowestScore.append(record[0])

    studentsArrWithSecondLowestScore.sort()
    for name in studentsArrWithSecondLowestScore:
        print(name)
