function filterNumbers(numbers, filterFun) {
    const evenNumbers = []
    for (const number of numbers) {
        if (filterFun(number))
            evenNumbers.push(number);
    }
    return evenNumbers;
}

function mapNumbers(numbers, mapFun) {
    const mappedNumbers = []
    for (const number of numbers) {
        mappedNumbers.push(mapFun(number));
    }
    return mappedNumbers;
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
for (const even of mapNumbers(filterNumbers(numbers, is_even), to_cubed)) { // 500K
    console.log(even);
}