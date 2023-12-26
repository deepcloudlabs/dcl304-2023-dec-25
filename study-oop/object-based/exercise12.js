let x = 0;
let y = 0;
let radius = 100;

let circle1 = {
    x: x,
    y: y,
    radius: radius,
    area: function (){
        return Math.PI * this.radius ** 2;
    }
}
circle1.circumference = function(){
        return 2.0 * Math.PI * this.radius;
}
for (let key in circle1){
    const value = circle1[key];
    if (typeof(value) === 'function') continue;
    console.log(`${key}: ${value}`)
}
for (let [key,value] of Object.entries(circle1)) {
    if (typeof(value) === 'function') continue;
    console.log(`${key}: ${value}`);
}
