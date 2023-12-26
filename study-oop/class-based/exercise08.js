//region class definitions
class Account {
    constructor(iban, balance = 10.0) {
        this.iban = iban;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        console.log("Account::withdraw")
        if (amount > this.balance) throw "Your balance does not cover the amount";
        this.balance -= amount;
    }
}
// Account: super/base class
// CheckingAccount: sub/derived class
class CheckingAccount extends Account {
    constructor(iban, balance = 10.0, overdraftAmount = 1_000) {
        super(iban, balance);
        this._iban = iban;
        this._balance = balance;
        this._overdraftAmount = overdraftAmount;
    }


    get iban() {
        return this._iban;
    }

    get balance() {
        return this._balance;
    }

    get overdraftAmount() {
        return this._overdraftAmount;
    }

    set overdraftAmount(value) {
        this._overdraftAmount = value;
    }

// overriding
    withdraw(amount) {
        console.log("CheckingAccount::withdraw")
        if (amount > (this.balance+this._overdraftAmount)) throw "Your balance does not cover the amount";
        this.balance -= amount;
    }
}
//endregion

accounts = [
    new Account("tr1",10_000),
    new CheckingAccount("tr2",20_000),
    new Account("tr3",30_000),
    new CheckingAccount("tr4",40_000),
    new Account("tr5",50_000)
]
for(const account of accounts){
    account.withdraw(1_000) // polymorphism
}
const acc = new CheckingAccount("tr2",20_000)
acc.overdraftAmount = 10_000; // looks like attribute works as method