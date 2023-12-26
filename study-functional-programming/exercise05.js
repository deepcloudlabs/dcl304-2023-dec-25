const fs = require("node:fs")
fs.readFile("movies.json",(err,data)=>{
    const movies = JSON.parse(data)
    // Function Composition => HoF: map, reduce
    // 1M movies
    movies.filter(movie => movie.year >= 1970) // 800K
          .filter(movie => movie.year < 1980) // 20K
          .filter(movie => movie.genres.some(genre => genre.name == "Drama")) // 18K
          .sort((m1,m2) => m2.year - m1.year)
          .forEach(movie => console.log(`${movie.year}: ${movie.title}`))
})