function fun(){ // after es6+
    for (var i=0;i<5;++i)
        console.log(`[inside the loop] i: ${i}`)
    console.log(`[outside the loop] i: ${i}`)
    for (let j=0;j<5;++j)
        console.log(`[inside the loop] j: ${j}`)
    // console.log(`[outside the loop] j: ${j}`) // ReferenceError: j is not defined
}
fun()
