
// function add(a, b) {
//     return a + b;
// };

// arrow function syntax
const add = (a, b) => {
    return a + b;
}

// implicit return syntax
const subtract = (a, b) => a - b;

// omit the () when you have a single parameter
const double = a => a * 2;


// returning object, put object inside ()
const createObject = () => ({
    name: 'Lasse'
});

console.log('arrow function in a callback');
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(n => console.log(n));


console.log('add: 1 + 2 =', add(1, 2));
console.log(subtract ( 10, 5));
console.log(double ( 10, 5));
console.log('log createObject: ', createObject());

