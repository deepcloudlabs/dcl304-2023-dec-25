function lottery(max, size) {
    return new Promise(function (accept, reject) {
        setTimeout(function(){
            reject("time is out!")
        },5_000);
        const numbers = [];
        while (numbers.length < size) {
            const candidate = Math.floor(Math.random() * max) + 1;
            if (numbers.includes(candidate)) continue;
            numbers.push(candidate);
        }
        numbers.sort((x, y) => x - y);
        if (Math.random()<0.5)
            reject("something is wrong!")
        else
            setTimeout(function(){
                accept(numbers);
            },Math.random()*10_000);
    });
}

for (let i = 0; i < 10; ++i)
    lottery(60, 6).then(function(numbers){
        console.log(numbers);
    }).catch(function(reason){
        console.error(reason);
    });