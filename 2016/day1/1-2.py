blocks = []
pos = [0, 0]
dirs = ['N', 'E', 'W', 'S']
dir = 0
poses = []

with open ('input.txt', 'r') as file:
    for line in file:
        line = line.rstrip()
        line = line.split(', ')

        for block in line:
            if block[0] == 'R':
                d = 1
            else:
                d = -1

            blocks.append([d, int(block[1:])])

    file.close()

#print(len(blocks))

for block in blocks:
    dir += block[0]

    if dir < 0:
        dir = len(dirs) - 1
    if dir > len(dirs) - 1:
        dir = 0

    match dirs[dir]:
        case 'N':
            pos[1] += block[1]
        case 'E':
            pos[0] += block[1]
        case 'S':
            pos[1] -= block[1]
        case 'W':
            pos[0] -= block[1]

    if not pos in poses:
        poses.append(pos)
    else:
        print(pos)
        break
