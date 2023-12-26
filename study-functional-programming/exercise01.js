//  I. Imperative Programming: Procedural Programming, OOP
// Algorithm -> Step -> Solution
// II. Declarative Programming: OOP, Functional Programming
// Describe solution: SQL select name, population, surfaceArea from countries where continent='Asia'

// OOP: Class --> Object, Members: field/attribute/state/data/property + methods

// Imperative Programming:
numbers = [4, 8, 15, 16, 23, 42]
let allEvenNumbers = true
for (const number of numbers) {
    if (number % 2 === 0) {
        allEvenNumbers = false;
        break;
    }
}
console.log(allEvenNumbers)
// Functional Programming
// Functions: i) HoF (higher-order functions): filter/map/reduce/flat/flatMap/some/every/forEach/...
//           ii) Pure Functions: stateless function/side effect free function => lambda expression
                  // HoF   lambda expression -> pure function
console.log(numbers.every( n => n%2 === 0))
// async function, generator function