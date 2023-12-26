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

console.log(circle1)
const serializedCircle1 = JSON.stringify(circle1)
console.log(serializedCircle1)
const circle2 = JSON.parse(serializedCircle1);
console.log(circle2)
