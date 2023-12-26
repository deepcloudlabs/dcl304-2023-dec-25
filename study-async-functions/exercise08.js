async function fun(){
    return 42;
}

fun(42)
    .then( async function(number){
    return 2 * number;
})
    .then(async function(number){
    return 3 * number;
})
  .then(console.log)
  .catch(console.error)