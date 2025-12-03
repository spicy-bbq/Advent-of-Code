import INPUT from './input.txt'

var data: any[] = INPUT.trimEnd().split('\n')
var total: number = 0

for(let i: number = 0; i < data.length; i++) {
    let batteries: number[] = [0, 0, 0, 0] // bat1, bat2, idx bat1, idx bat2
    let bat1_set: boolean = false
    data[i] = data[i].split('')

    for(let j: number = 0; j < data[i].length; j++) {
        data[i][j] = Math.floor(data[i][j])
        const BAT: number = data[i][j]
        
        if(!bat1_set && BAT > batteries[0] && j != data[i].length - 1) {
            batteries[0] = BAT
            batteries[2] = j
        }
        
        if(!bat1_set && j == data[i].length - 1) {
            bat1_set = true
        }
    }

    for(let k: number = 0; k < data[i].length; k++) {
        const BAT: number = data[i][k]

        if(bat1_set && BAT > batteries[1] && k > batteries[2]) {
            batteries[1] = BAT
            batteries[3] = k
        }
    }

    total += Math.floor(batteries[0].toString() + batteries[1].toString())
}

console.log(total)
