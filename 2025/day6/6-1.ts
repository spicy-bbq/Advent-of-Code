import INPUT from './input.txt'

const DATA = INPUT.trimEnd().split('\n')
var nums: number[][] = []
var ops: string[][] = []
var total: number = 0

for(let i: number = 0; i < DATA.length; i++) {
    if(i < DATA.length - 1) {
        nums.push(DATA[i].split(' ').filter(e => {return e != ''}).map(Math.floor))
    }

    else {
        ops.push(DATA[i].split(' ').filter(e => {return e != ''}))
    }
}

for(let i: number = 0; i < ops[0].length; i++) {
    let n: number

    for(let j: number = 0; j < nums.length; j++) {
        if(j == 0) {
            n = nums[j][i]
        }

        else {
            if(ops[0][i] == '+') {
                n += nums[j][i]
            }

            else {
                n *= nums[j][i]
            }
        }
    }

    total += n
}

console.log(total)
