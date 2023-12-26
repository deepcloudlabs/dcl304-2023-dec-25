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
const numbers = Promise.all(
    [
            lottery(60,6),
            lottery(60,6),
            lottery(60,6),
            fun(),
            gun()
    ]
);
numbers.then(console.log);
