const fs = require("node:fs")
function groupByContinentAndSumPopulation(group, [continent, population]){
    if (!group.hasOwnProperty(continent))
        group[continent] = 0;
    group[continent] += population;
    return group;
}
fs.readFile("countries.json",(err,data)=>{
    const countries = JSON.parse(data)
    // Function Composition => HoF: map, reduce
    const populationByContinent =
    countries.filter(country => country.hasOwnProperty("population"))
             .map(country => [country.continent, country.population])
             .reduce(groupByContinentAndSumPopulation,{}) // group by continent
    console.log(populationByContinent);
})