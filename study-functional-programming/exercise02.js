const fs = require("node:fs")
fs.readFile("countries.json",(err,data)=>{
    const countries = JSON.parse(data)
    // Function Composition => HoF: map, reduce
    countries.map(country => country.continent)
             .reduce((continents,continent)=>{
                continents.add(continent)
                return continents;
        } , new Set())
        .forEach(continent => console.log(continent));
})