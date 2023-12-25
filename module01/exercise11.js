x = null
console.log(null == undefined) // always true
console.log(null == 42) // always false
console.log(null == "jack") // always false
console.log(null == {}) // always false
console.log(undefined == 42) // always false
console.log(undefined == "jack") // always false
console.log(undefined == {}) // always false
x = new Date();
console.log(x == "jack"); // primitive ==> number, Date.toString(), Date.valueOf()