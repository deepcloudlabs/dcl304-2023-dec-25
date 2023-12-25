let numbers = [16, 23, 42, 4, 8, 15];
let [first,second,...rest] = numbers;
console.log(first) // 16
console.log(second) // 23
console.log(rest) // [42, 4, 8, 15]
let [ilk, ikinci] = numbers;
console.log(ilk) // 16
console.log(ikinci) // 23