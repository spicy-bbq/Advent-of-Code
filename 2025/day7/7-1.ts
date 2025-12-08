import INPUT from './input.txt'

var data: string[][] = INPUT.trimEnd().split('\n').map(l => l.split(''))
var splits: number = 0

for(let y: number = 0; y < data.length; y++) {
    for(let x: number = 0; x < data[y].length; x++) {
        if(y == 0 && data[y][x] == 'S') data[y + 1][x] = '|'

        if(y > 0 && data[y - 1][x] == '|') {
            if(data[y][x] == '^') {
                if(x - 1 >= 0) data[y][x - 1] = '|'
                if(x + 1 < data[y].length) data[y][x + 1] = '|'
                splits++
            }
            else data[y][x] = '|'
        }
    }
}

data.forEach(l => {
    console.log(l.join(''))
})

console.log(splits)
