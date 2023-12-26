// Object-based Programming
const jack = {
    identity: "11111111110",
    fullname: {
        firstname: "jack",
        lastname: "shephard"
    },
    salary: {
        value: 100_000,
        currency: "EUR"
    },
    iban: "tr1",
    departments: ["IT", "SALES"],
    fulltime: true
}
console.log(jack)
delete jack.fulltime;
delete jack.salary.currency;
console.log(jack)
