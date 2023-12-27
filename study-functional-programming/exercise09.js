function* filterNumbers(numbers, filterFun) {
    console.log("filterNumbers");
    for (const number of numbers) {
        if (filterFun(number))
            yield number;
    }
}

const is_even = u => {
    console.log(`is_even(${u})`)
    return u % 2 === 0;
};
console.log("Application is just started!")
numbers = [4, 8, 15, 16, 23, 42]
let generator = filterNumbers(numbers, is_even);
console.log("After calling filterNumbers()...")
console.log(generator.next().value)
console.log(generator.next().value)
console.log("Application is just completed!")
