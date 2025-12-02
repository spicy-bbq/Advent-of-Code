import input from './input.txt'

var data: any[] = input.trimEnd().split(',')
var invalid: number[] = []
var sum: number = 0

for(let i: number = 0; i < data.length; i++) {
    let r: number[] = []

    r[0] = Math.floor(data[i].split('-')[0])
    r[1] = Math.floor(data[i].split('-')[1])
    data[i] = r
}

data.forEach(line => {
    for(let i: number = line[0]; i <= line[1]; i++) {
        const s: string = String(i)

        if(s.length % 2 == 0) {
            const s1: string = s.slice(0, s.length / 2)
            const s2: string = s.slice(s.length / 2, s.length)
            if(s1 === s2) {
                invalid.push(i)
                continue
            }
        }
    }
})

invalid.forEach(num => {
    sum += num
})

console.log(sum)
