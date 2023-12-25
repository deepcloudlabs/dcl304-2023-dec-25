function gun(x, y) {
    for (let i in arguments){
        let argument = arguments[i];
        console.log(`${i}th argument: ${argument}`);
    }
    if (arguments.length !== 2)
        throw "You must provide exactly two parameters."
    return x ** 2 + y ** 2;
}
// console.log(`gun(): ${gun()}`);
// console.log(`gun(4): ${gun(4)}`);
console.log(`gun(4,8): ${gun(4,8)}`);
// console.log(`gun(4,8,100,200): ${gun(4,8,100,200)}`);
