numbers1 = [
    3, // 0
    5, // 1
    [4, 8, 16], // 2
    42, // 3
    [3, 7] // 4
]
let numbers2 = [...numbers1]
numbers2[2] = [...numbers1[2]]
numbers2[4] = [...numbers1[4]]
numbers2[2].push(549)
console.log(numbers1)
console.log(numbers2)