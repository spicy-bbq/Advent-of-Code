import INPUT from './input.txt'

var data: string[][] = INPUT.trimEnd().split('\n').map(l => l.split(''))
var paths: bigint[][] = []
var total: bigint = 0n

for(let y: number = 0; y < data.length; y++) {
    paths[y] = Array(data[0].length).fill(0n)

    for(let x: number = 0; x < data[y].length; x++) {

        if(y == 0 && data[y][x] == 'S') paths[y][x] = 1n

        if(y > 0 && paths[y - 1][x] > 0) {
            if(data[y - 1][x] == '.' || data[y - 1][x] == 'S') paths[y][x] += paths[y - 1][x]   

            if(data[y - 1][x] == '^') {
                paths[y][x - 1] += paths[y - 1][x]
                paths[y][x + 1] += paths[y - 1][x]
            }
        }
    }
}

paths[paths.length - 1].forEach(n => {
    total += n
})

console.log(total)
