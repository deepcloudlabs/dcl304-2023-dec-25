class Account {
    constructor(iban, balance = 10.0) {
        this.iban = iban;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount > this.balance) throw "Your balance does not cover the amount";
        this.balance -= amount;
    }
}
// Account: super/base class
// CheckingAccount: sub/derived class
class CheckingAccount extends Account {
    constructor(iban, balance = 10.0, overdraftAmount = 1_000) {
        super(iban, balance);
        this.overdraftAmount = overdraftAmount;
    }


    withdraw(amount) {
        if (amount > (this.balance+this.overdraftAmount)) throw "Your balance does not cover the amount";
        this.balance -= amount;
    }
}

const acc1 = new Account("tr1", 10_000);
const acc2 = new CheckingAccount("tr1", 10_000,5_000);
console.log(acc1)
acc1.withdraw(10_000)
console.log(acc1)
console.log(acc2)
acc2.withdraw(12_000)
console.log(acc2)
acc2.withdraw(3_000)
console.log(acc2)
acc2.withdraw(1)
