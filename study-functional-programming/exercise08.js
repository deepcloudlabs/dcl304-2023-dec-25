function* filter(numbers, filterFun) {
    for (const number of numbers) {
        if (filterFun(number))
            yield number;
    }
}

function* map(numbers, mapFun) {
    for (const number of numbers) {
        yield mapFun(number);
    }
}

const to_cubed = p => {
    console.log(`to_cubed(${p})`)
    return p ** 3;
};
const is_even = u => {
    console.log(`is_even(${u})`)
    return u % 2 === 0;
};
const numbers = [4, 8, 15, 16, 23, 42]; // 1M
const generator = map(filter(numbers, is_even), to_cubed);
let result= generator.next();
while(!result.done) {
  const value = result.value;
  console.log(`for loop: ${value}`);
  result = generator.next();
}
/*
for (const even of generator) { // 500K
    console.log(`for loop: ${even}`);
}
 */
