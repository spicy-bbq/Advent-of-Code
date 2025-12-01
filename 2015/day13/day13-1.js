import input from './input.txt'

const data = input.split('\n')
let raw = {}
let compared = {}

data.forEach(line => {
    let sign = 0

    if(line == '') {
        return
    }

    line = line.split(' ')

    if(line[2] == 'gain') {
        sign = 1
    }

    else {
        sign = -1    
    }

    if(!raw[line[0]]) {
        raw[line[0]] = {}
    }

    raw[line[0]][line[10].replace('.', '')] =  Math.floor(line[3]) * sign

})

for(let i = 0; i < Object.keys(raw).length; i++) {
//Object.entries(raw).forEach(line => {
    console.log(raw)
    //console.log(line[0], Object.values(line[1]))
    
    //if(!compared[line[0]]) {
    //    compared[line[0]] = {}
    //}

    //compared[line[0]][]
}
