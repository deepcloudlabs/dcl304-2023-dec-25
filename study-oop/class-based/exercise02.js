class Employee {
    // Class constructor may not be an async method
    constructor(identity,fullname,salary,iban,departments) {
        this.identity = identity;
        this.fullname = fullname;
        this.salary = salary;
        this.iban = iban;
        this.departments = departments;
    }
    async sayHello(){
        // console.log(`Hello, ${this.fullname}!`)
        return `Hello, ${this.fullname}!`
    }

    increaseSalary(rate){
        this.salary *= (1.0+rate);
    }

}


let jack = new Employee("1","jack bauer",100_000,"tr1",["IT", "SALES"]);
console.log(jack)
jack.sayHello().then(console.log)
jack.increaseSalary(0.5)
console.log(jack.salary)
