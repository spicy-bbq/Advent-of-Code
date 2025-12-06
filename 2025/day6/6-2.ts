import INPUT from './input.txt'

var data = INPUT.split('\n')
var v_lines: any[][] = []
var total: number = 0
var op: string = ''
var ops: string[][] = [[]]
var op_i: number = 0

for(let i: number = 0; i < data.length; i++) {
    data[i] = data[i].split('')

    for(let j: number = 0; j < data[i].length; j++) {
        if(v_lines[j] == null ) v_lines[j] = []
        v_lines[j].push(data[i][j])
    }
}

for(let i: number = v_lines.length - 1; i >= 0; i--) {
    let n: string = ''

    if(v_lines[i][4] == '+' || v_lines[i][4] == '*') op = v_lines[i][4]

    if(v_lines[i].every(e => e == ' ')) {
        ops[op_i].push(op)
        op_i++
        ops[op_i] = []
        continue
    }

    for(let j: number = 0; j < 4; j++) {
        if(v_lines[i][j] == ' ') continue
        n += v_lines[i][j]
    }

    ops[op_i].push(Math.floor(n))
}

ops[op_i].push(op)

ops.forEach(l => {
    let n: number = l[0]

    for(let i: number = 1; i < l.length - 1; i++) {
        if(l[l.length - 1] == '+') n += l[i]
        else n *= l[i]
    }

    total += n
})

console.log(total)
