function fun(e){
    console.log("Button is clicked!")
    console.log(e)
}
function gun(){
    console.log("After 5 seconds...")
}

function application(e){
    console.log("Application is running...")
    console.log(e)
    let btn1 = document.getElementById("btn1")
    // event triggered programming
    // register fun function to observe 'click' event
    btn1.addEventListener('click', fun);
    setInterval(gun, 5_000)
}

window.addEventListener('load', application);
