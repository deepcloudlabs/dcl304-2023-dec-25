x = 0 / 0
console.log(typeof(x))
console.log(x)
x++
console.log(x)
x = 0 * x
console.log(x)
console.log(x === x) // false ==> NaN
if (x === x){ // x is NOT NaN
    x++;
}
if (!Number.isNaN(x)){ // x is NOT NaN
    x++;
}