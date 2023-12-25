x = "\u20ba" // 2-Byte
console.log(x.length)
console.log(x)
x = "\ud834\udd1e" // 4-byte
console.log(x.length)
console.log(x)
// Regular Expression: /^.$/.test(x)