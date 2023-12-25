function gun(x=1, y=1) { // since es6
    console.log(`x: ${x}`)
    console.log(`y: ${y}`)
    return x ** 2 + y ** 2;
}
console.log(`gun(): ${gun()}`);
console.log(`gun(4): ${gun(4)}`);
console.log(`gun(4,8): ${gun(4,8)}`);
console.log(`gun(4,8,100,200): ${gun(4,8,100,200)}`);
