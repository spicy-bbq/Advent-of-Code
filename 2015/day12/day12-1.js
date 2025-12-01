import input from './input.json'

let sum = 0
let times = 0

function Search(input) {
    console.log(input)
    times++
    if(Array.isArray(input) || Object.keys(input).length > 0) {
        for(let i = 0; i < input.children; i++) {
            Search(input.children[i])
        }
    }
}

Search(input)
console.log(times)
