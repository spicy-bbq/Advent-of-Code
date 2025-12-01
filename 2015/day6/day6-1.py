data = []
grid = []
total = 0

with open('input.txt', 'r') as file:
    for line in file:
        line = line.rstrip()
        line = line.split(' ')

        if line[0] == 'toggle':
            state = 2
        else:
            if line[1] == 'on':
                state = 1
            else:
                state = 0

        data.append([state, line[-3].split(','), line[-1].split(',')])
    file.close()

for y in range(1000):
    line = []

    for x in range(1000):
        line.append(0)

    grid.append(line)

for line in data:
    start_x = int(line[1][0])
    start_y = int(line[1][1])
    end_x = int(line[2][0])
    end_y = int(line[2][1])

    for y in range(start_y, end_y):
        for x in range(start_x, end_x):
            if line[0] != 2:
                grid[y][x] = line[0]
            else:
                if grid[y][x] == 0:
                    grid[y][x] = 1
                else:
                    grid[y][x] = 0

for line in grid:
    for light in line:
        if light == 1:
            total += 1

print(total)
