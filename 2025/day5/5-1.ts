import INPUT from './input.txt'

var fresh: number = 0
var ranges: number[][] = []
var ingredients: number[] = []

INPUT.trimEnd().split('\n').forEach(line => {
    if(line.length == 0) {
        return
    }

    if(line.split('-').length == 2) {
        ranges.push(line.split('-').map(Math.floor))
    }

    else {
        ingredients.push(Math.floor(line))
    }

})

ingredients.forEach(ingredient => {
    for(let i: number = 0; i < ranges.length; i++) {
        if(ingredient >= ranges[i][0] && ingredient <= ranges[i][1]) {
            fresh++
            return
        }
    }
})

console.log(fresh)
