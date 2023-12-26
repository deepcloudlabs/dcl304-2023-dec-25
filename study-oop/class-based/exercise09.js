// prototype-based inheritance
class Circle {
    constructor(x,y,radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

}

const c1 = new Circle(0,0,1);
c1.color = "Red";
console.log(c1)
const c2 = new Circle(0,0,1);
console.log(c2)
Circle.prototype.thickness = 8;
Circle.prototype.area = function(){ return Math.PI * this.radius ** 2;}
console.log(c1.thickness)
console.log(c2.thickness)
const c3 = new Circle(0,0,1);
console.log(c3.thickness)
console.log(c1.hasOwnProperty("thickness"))
console.log(c2.hasOwnProperty("thickness"))
console.log(c3.hasOwnProperty("thickness"))
c3.thickness=4
console.log(c3.hasOwnProperty("thickness"))
for (const circle of [c1,c2,c3])
   console.log(circle.area())

