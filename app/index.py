file = open("./app/text.txt", 'r')

with file:
    print(file.read())

file.close()