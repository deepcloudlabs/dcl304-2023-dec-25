let numbers = [16, 23, 42, 4, 8, 15];
console.log(numbers)
// Higher-Order Function
numbers.sort(function(x,y){
    if (x < y) return -1;
    if (x===y) return 0;
    if (y < x) return +1;
})
numbers.sort(function(x,y){
    return x-y;
})
numbers.sort((x,y) => {
    return x-y;
})
numbers.sort((x,y) => x-y)
console.log(numbers)

