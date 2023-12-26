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
for (let field in jack) {
    const value = jack[field];
    if (typeof (value) === 'object') {
        for (let attr in value) {
            const val = value[attr];
            console.log(`${field}.${attr}: ${val}`)
        }
    } else {
        console.log(`${field}: ${value}`)
    }
}