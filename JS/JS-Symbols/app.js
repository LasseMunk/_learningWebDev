// create a symbol
// symbols is a datatype primitive. So it doesn't have a constructor
// therefore we don't write = new Symbol();
const sym1 = Symbol();
const sym2 = Symbol('sym2');

// console.log(typeof sym2);
// console.log(Symbol() === Symbol('123')); // return false, as no two symbols can be the same
// console.log(`Hello ${String(sym1)}`); // will output 'Hello Symbol()' 
// console.log(`Hello ${sym1.toString()}`); // will output 'Hello Symbol()' 

// Unique Object Keys

const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'Prop1'; // myObj[KEY1] means it adds the KEY1 as a property to the object myObj
myObj[KEY2] = 'Prop2'; 
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

console.log(myObj[KEY1]);
console.log(myObj[KEY2]);

// Symbols are not enumerable in for..in loops
for(let i in myObj) {
  console.log(`${i}: ${myObj[i]}`);
}

// Symbols are ignored when using JSON.stringify
console.log(JSON.stringify({key: 'prop'}));
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'})); // returns empty object