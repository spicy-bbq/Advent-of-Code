import input from './input.txt'

var n: number = 50
const data: string[] = input.split('\n')
var zeros: number = 0

for(let i: number = 0; i < data.length; i++) {
    if(i == data.length - 1) {
        continue
    }

    const ins: string = data[i]
    let steps: number = Math.floor(ins.substring(1))
    const dir: string = ins[0]

    while(steps > 0) {
        if(dir == 'L') {
            n -= 1
            
            if(n == -1) {
                n = 99
            }

            if(n == 0) {
                zeros++
            }
        }

        else {
            n += 1

            if(n == 100) {
                n = 0
            }

            if(n == 0) {
                zeros++
            }
        }

        steps--
    }
}

console.log(zeros)
