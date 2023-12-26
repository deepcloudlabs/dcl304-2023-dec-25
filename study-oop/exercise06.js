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

let clonedJack = {...jack} // shallow cloning
clonedJack.fullname = {...jack.fullname}
clonedJack.salary = {...jack.salary}
clonedJack.salary.value = 200_000
clonedJack.fullname.lastname = "bauer"
console.log(jack)
console.log(clonedJack)