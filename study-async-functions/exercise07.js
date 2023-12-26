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
async function fun(){
    return [4,8,15,16,23,42];
}
async function gun() {
    return "Hello Mars!";
}
async function getir(){
    return [
            await lottery(60,6),
            await lottery(60,6),
            await lottery(60,6),
            await fun(),
            await gun()
    ]
}
getir().then(console.log);
