function isEven(n) {
    return n % 2 === 0;
}

function toCube(m) {
    return m ** 3;
}

const numbers = [4, 8, 15, 16, 23, 42]
                                           // Higher-Order Function: filter/map
//const cubedEvenNumbers = numbers.filter(isEven).map(toCube);
                                                 // lambda expression --> anonymous function
const cubedEvenNumbers = numbers.filter(n => n % 2 === 0)
                                                // lambda expression --> anonymous function
                                          .map( m => m ** 3);
console.log(numbers)
console.log(cubedEvenNumbers)
