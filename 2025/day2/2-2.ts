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
    main_loop:
    for(let i: number = line[0]; i <= line[1]; i++) {
        const s: string = String(i)

        for(let j: number = 1; j <= s.length / 2; j++) {
            if(s.length % j == 0) {
                let parts: string[] = []

                for(let k: number = 0; k < s.length; k += j) {
                    parts.push(s.slice(k, k + j))
                }

                const is_invalid: boolean = parts.every(part => part === parts[0])

                if(is_invalid) {
                    invalid.push(i)
                    continue main_loop
                }
            }
        }
    }
})

invalid.forEach(num => {
    sum += num
})

console.log(sum)
