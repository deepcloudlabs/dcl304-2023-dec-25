function lottery(max, size) {
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
    console.log(lottery(60, 6));