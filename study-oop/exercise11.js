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
const clonedJack = JSON.parse(JSON.stringify(jack))
clonedJack.salary.value = 200_000
clonedJack.fullname.lastname = "bauer"
console.log(jack)
console.log(clonedJack)