const fs = require("node:fs")
function fun(acc,population){
    console.log(`fun(${acc},${population})`);
    return acc+population;
}
fs.readFile("countries.json",(err,data)=>{
    const countries = JSON.parse(data)
    // Function Composition => HoF: map, reduce
    const populationOfAsianCountries =
    countries.filter(country => "Asia" === country.continent )
             .filter(country => country.hasOwnProperty("population"))
             .map(country => country.population)
//           .reduce( (x,y) => x+y, 0);
             .reduce(fun,0)
    console.log(populationOfAsianCountries);
})