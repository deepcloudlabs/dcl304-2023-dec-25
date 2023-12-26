class Employee {
    // Class constructor may not be an async method
    constructor(identity, fullname, salary, iban, departments) {
        this.identity = identity;
        this.fullname = fullname;
        this.salary = salary;
        this.iban = iban;
        this.departments = departments;
        this.sayHello = this.sayHello.bind(this);
        this.increaseSalary = this.increaseSalary.bind(this);
    }

    sayHello() {
        console.log(`Hello, ${this.fullname}!`)
    }

    increaseSalary(rate) {
        this.salary *= (1.0 + rate);
    }

}


let jack = new Employee("1", "jack bauer", 100_000, "tr1", ["IT", "SALES"]);
let kate = new Employee("2", "kate austen", 200_000, "tr2", ["FINANCE"]);

jack.sayHello(); // sayHello(jack)
const id1 = setInterval(jack.sayHello, 2_000);
const id1 = setInterval(kate.sayHello, 3_000);
setTimeout(() => clearInterval(id1), 60_000)
setTimeout(() => clearInterval(id2), 60_000)
