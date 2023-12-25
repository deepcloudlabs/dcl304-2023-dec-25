numbers = [4, 8, 15, 16, 23, 42]
// External Loop #1
for (let i=0;i<numbers.length;++i){
    let number = numbers[i];
    console.log(`numbers[${i}]: ${numbers[i]}`)
}
// External Loop #2
for (let i in numbers){
    let number = numbers[i];
    console.log(`numbers[${i}]: ${numbers[i]}`)
}
// External Loop #3
for (let number of numbers){
    console.log(`${number}`)
}
// Internal Loop #4 => functional programming
console.log(typeof(console.log))
numbers.forEach(console.log) // method reference
numbers.forEach(function(number,i){
    console.log(`numbers[${i}]: ${number}`)
}) // function
numbers.forEach((number,i) =>
    console.log(`numbers[${i}]: ${number}`)
) // lambda expression