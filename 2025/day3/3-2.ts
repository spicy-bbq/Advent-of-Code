import INPUT from './input.txt'

const BATTS_NUM: number = 12
var data: any[] = INPUT.trimEnd().split('\n')
var total: number = 0

for(let line: number = 0; line < data.length; line++) {
    let batteries: number[] = []
    let bat_idx: number[] = []
    data[line] = data[line].split('')

    for(let i: number = 0; i < BATTS_NUM; i++) {
        batteries.push(0)
        bat_idx.push(-1)
    }

    for(let current_bat: number = 0; current_bat < BATTS_NUM; current_bat++) {
        let start: number = bat_idx[current_bat - 1] + 1

        if(current_bat == 0) {
            start = 0
        }

        for(let num: number = start; num < data[line].length; num++) {
            data[line][num] = Math.floor(data[line][num])

            if(data[line][num] > batteries[current_bat]) {
                if(num > bat_idx[current_bat] || current_bat == 0) {
                    if(num < data[line].length - BATTS_NUM + current_bat + 1) {
                        batteries[current_bat] = data[line][num]
                        bat_idx[current_bat] = num
                    }
                }
            }
        }
    }

    total += Math.floor(batteries.join(''))
}

console.log(total)
