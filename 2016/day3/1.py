triangles = 0

with open('input.txt', 'r') as file:
    for line in file:
        line = line.rstrip()
        line = line.split()

        for i in range(len(line)):
            line[i] = int(line[i])

        if line[0] + line[1] > line[2] and line[1] + line[2] > line[0] and line[0] + line [2] > line[1]:
            triangles += 1
    file.close()

print(triangles)
