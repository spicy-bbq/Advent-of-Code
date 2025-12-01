let input = 1321131112
let output = ''
let length = 0

input = input.toString()

function LookAndSay(input_num) {
    let output_temp = ''

    for(let i = 0; i < input_num.length; i++) {
        let count = 1
    
        while(i + 1 < input_num.length && input_num[i] == input_num[i + 1]) {
            count++
            i++
        }
    
        output_temp += count.toString() + input_num[i]
    }

    return output_temp
}

output = LookAndSay(input)
for(let i = 0; i < 49; i++) {
    output = LookAndSay(output)
}

for(let i = 0; i < output.length; i++) {
    length++
}

console.log(length)
