// Object-based Programming
const jack = {
    identity: "11111111110"
};

jack.fullname = {}
jack.fullname.firstname = "jack";
jack.fullname.lastname = "shephard";
jack.salary = {
    value: 100_000,
    currency: "EUR"
};
jack.iban = "tr1";
jack.departments = [];
jack.departments.push("IT")
jack.departments.push("SALES")
jack.fulltime = true;

console.log(jack.fullname.firstname)
console.log(jack.salary.currency)
console.log(jack['salary'].currency)
console.log(jack['salary']['currency'])
console.log(jack.fulltime)
console.log(jack['fulltime'])
console.log(jack)