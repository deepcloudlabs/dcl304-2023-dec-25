Array.prototype.arithmeticSort = function () {
    this.sort((x, y) => x - y)
}

const numbers = [4, 8, 15, 16, 23, 42];
numbers.sort()
console.log(numbers)
numbers.arithmeticSort()
console.log(numbers)
