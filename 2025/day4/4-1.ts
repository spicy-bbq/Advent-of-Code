import INPUT from './input.txt'

const DATA: string[] = INPUT.trimEnd().split('\n')
const MAX_N_PAPERS: number = 4
var accessible: number = 0

for(let i: number = 0; i < DATA.length; i++) {
    for(let j: number = 0; j < DATA[i].length; j++) {
        if(DATA[i][j] == '.') {
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
            if(DATA[c[0]] != null && DATA[c[0]][c[1]] != null) {
                neighbors.push(DATA[c[0]][c[1]])
            }
        })

        neighbors.forEach(neighbor => {
            if(neighbor == '@') {
                n_papers++
            }
        })

        if(n_papers < MAX_N_PAPERS) {
            accessible++
        }
        console.log(neighbors, n_papers)
    }
}

console.log(accessible)
