keypad = [
    ['0', '0', '1', '0', '0'],
    ['0', '2', '3', '4', '0'],
    ['5', '6', '7', '8', '9'],
    ['0', 'A', 'B', 'C', '0'],
    ['0', '0', 'D', '0', '0']
]

pos = [2, 0]
code = []

with open('input.txt', 'r') as file:
    for line in file:
        line = line.rstrip()

        for c in line:
            match c:
                case 'U':
                    if pos[0] - 1 >= 0 and keypad[pos[0] - 1][pos[1]] != 0:
                        pos[0] -= 1
                case 'D':
                    if pos[0] + 1 < 5 and keypad[pos[0] + 1][pos[1]] != 0:
                        pos[0] += 1
                case 'R':
                    if pos[1] + 1 < 5 and keypad[pos[0]][pos[1] + 1] != 0:
                        pos[1] += 1
                case 'L':
                    if pos[1] - 1 >= 0 and keypad[pos[0]][pos[1] - 1] != 0:
                        pos[1] -= 1

        code.append(keypad[pos[0]][pos[1]])

    file.close()

print(''.join(code))
