if __name__ == '__main__':
    N = int(input(""))

    list = []

    for _ in range(N):
        query = input().split()

        if query[0] == "print":
            print(list)
        elif query[0] == "insert":
            list.insert(int(query[1]), int(query[2]))
        elif query[0] == "remove":
            list.remove(int(query[1]))
        elif query[0] == "append":
            list.append(int(query[1]))
        elif query[0] == "sort":
            list.sort()
        elif query[0] == "pop":
            list.pop()
        elif query[0] == "reverse":
            list.reverse()
