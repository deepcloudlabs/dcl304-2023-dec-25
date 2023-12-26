const fs = require("node:fs")
function groupByGenreAndCount(group, genre){
    if (!group.hasOwnProperty(genre))
        group[genre] = 0;
    group[genre]++;
    return group;
}
fs.readFile("movies.json",(err,data)=>{
    const movies = JSON.parse(data)
    // Function Composition => HoF: map, reduce
    Object.entries(
        movies.flatMap(movie => movie.genres)
              .map(genre => genre.name)
              .reduce(groupByGenreAndCount,{})
    ).forEach( ([genre,count])=>console.log(`${genre}: ${count}`))
})