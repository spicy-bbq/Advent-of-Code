keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

pos = [1, 1]
code = []

with open('input.txt', 'r') as file:
    for line in file:
        line = line.rstrip()

        for c in line:
            match c:
                case 'U':
                    if pos[0] - 1 >= 0:
                        pos[0] -= 1
                case 'D':
                    if pos[0] + 1 < 3:
                        pos[0] += 1
                case 'R':
                    if pos[1] + 1 < 3:
                        pos[1] += 1
                case 'L':
                    if pos[1] - 1 >= 0:
                        pos[1] -= 1

        code.append(str(keypad[pos[0]][pos[1]]))

    file.close()

print(''.join(code))
