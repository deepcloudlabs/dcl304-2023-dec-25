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

lottery(60,6).then(numbers1 => {
    lottery(60,6).then(numbers2 => {
        lottery(60,6).then(numbers3 => {
            const numbers = [];
            numbers.push(numbers1)
            numbers.push(numbers2)
            numbers.push(numbers3)
            console.log(numbers);
        })
    })
})