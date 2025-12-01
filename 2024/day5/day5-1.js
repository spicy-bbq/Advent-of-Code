import input from './input.txt'

const data = input.split('\n')
let rules = []
let updates = []
let correct_updates = []
let sum = 0

data.forEach(line => {
    if(line == '') {
        return
    }
    
    if(line.includes('|')) {
        line = line.split('|')
        line[0] = Math.floor(line[0])
        line[1] = Math.floor(line[1])
        rules.push(line)
    }

    else {
        line = line.split(',')
        for(let i = 0; i < line.length; i++) {
            line[i] = Math.floor(line[i])
        }
        updates.push(line)
    }
})

updates.forEach(update => {
    rules.forEach(rule => {
        if(!update.includes(rule[0])) {
            return
        }

        if(!update.includes(rule[1])) {
            return
        }

        let index_1
        let index_2

        for(let i = 0; i < update.length; i++) {
            if(update[i] == rule[0]) {
                index_1 = i
            }

            else if(update[i] == rule[1]) {
                index_2 = i
            }
        }

        if(index_1 < index_2) {
            if(!correct_updates.includes(update)) {
                correct_updates.push(update)
            }
        }
    })
})

correct_updates.forEach(update => {
    sum += update[Math.floor(update.length / 2)]
})

console.log(sum)
