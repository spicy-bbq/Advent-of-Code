import INPUT from './input.txt'

var fresh: bigint = 0n
var ranges: bigint[][] = []
var merged_ranges: bigint[][] = []
var start_rn: bigint
var end_rn: bigint

INPUT.trimEnd().split('\n').forEach(line => {
    if(line.length == 0) {
        return
    }

    if(line.split('-').length == 1) {
        return
    }

    ranges.push(line.split('-').map(n => BigInt(n)))
})

ranges.sort((a, b) => {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    return 0;
})

start_rn = ranges[0][0]
end_rn = ranges[0][1]

for(let i: number = 1; i < ranges.length; i++) {
    let start_next = ranges[i][0]
    let end_next = ranges[i][1]

    if(start_next <= end_rn + 1n) {
        if(end_next > end_rn) {
            end_rn = end_next
        }
    }

    else {
        merged_ranges.push([start_rn, end_rn])
        start_rn = start_next
        end_rn = end_next
    }
}

merged_ranges.push([start_rn, end_rn])

merged_ranges.forEach(range => {
    fresh += range[1] - range[0] + 1n
})

console.log(fresh)
