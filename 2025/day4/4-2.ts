import INPUT from './input.txt'

var data: any[] = INPUT.trimEnd().split('\n')
const MAX_N_PAPERS: number = 4
var last_moves: number = -1
var total: number = 0

for(let i: number = 0; i < data.length; i++) {
    data[i] = data[i].split('')
}

function Move(): number {
    let moves: number = 0

    for(let i: number = 0; i < data.length; i++) {
    
        for(let j: number = 0; j < data[i].length; j++) {
            if(data[i][j] == '.') {
                continue
            }
    
            let neighbors: string[] = []
            let n_papers: number = 0
            let n: any[] = []
            const N_COORDS: number[][] = [
                [i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1],
                [i - 1, j - 1], [i - 1, j + 1], [i + 1, j - 1], [i + 1, j + 1]
            ]
    
            N_COORDS.forEach(c => {
                if(data[c[0]] != null && data[c[0]][c[1]] != null) {
                    neighbors.push(data[c[0]][c[1]])
                }
            })
    
            neighbors.forEach(neighbor => {
                if(neighbor == '@') {
                    n_papers++
                }
            })
    
            if(n_papers < MAX_N_PAPERS) {
                data[i][j] = '.'
                moves++
                
            }
        }
    }

    return(moves)
}

while(last_moves != 0) {
    last_moves = Move()
    total += last_moves
}

console.log(total)
