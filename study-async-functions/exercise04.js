async function lottery(max, size) {
    const numbers = [];
    while (numbers.length < size) {
        const candidate = Math.floor(Math.random() * max) + 1;
        if (numbers.includes(candidate)) continue;
        numbers.push(candidate);
    }
    numbers.sort((x,y)=>x-y);
    return numbers;
}

for (let i = 0; i < 10; ++i)
    lottery(60, 6).then(function(numbers){
        console.log(numbers);
    }).catch(function(reason){
        console.error(reason);
    });