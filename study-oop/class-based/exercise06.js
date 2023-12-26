class Circle {
    #x;
    #y;
    #radius;
    constructor(x, y, radius) {
        this.#x = x;
        this.#y = y;
        this.#radius = radius;
    }

    area() {
        return Math.PI * this.#radius ** 2;
    }
    circumference() {
        return 2.* Math.PI * this.#radius;
    }
    scale(factor){
        if (factor <= 0.0) throw "factor must be a positive value!";
        this.#radius *= factor;
    }
}

const circle1 = new Circle(0,0,100);
console.log(circle1.area())
console.log(circle1.circumference())
circle1.scale(3.0)
console.log(circle1.area())
console.log(circle1.circumference())
