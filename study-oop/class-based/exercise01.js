const Employee = function(identity,fullname,salary,iban,departments){
    this.identity = identity;
    this.fullname = fullname;
    this.salary = salary;
    this.iban = iban;
    this.departments = departments;

    this.sayHello = function(){
        console.log(`Hello, ${this.fullname}!`)
    }

    this.increaseSalary = function(rate){
        this.salary *= (1.0+rate);
    }
}

let jack = new Employee("1","jack bauer",100_000,"tr1",["IT", "SALES"]);
console.log(jack)
jack.sayHello()
jack.increaseSalary(0.5)
console.log(jack.salary)
