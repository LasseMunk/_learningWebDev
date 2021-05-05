// Destructuring Assignment

let a, b;

[a, b] = [100, 200];

// REST pattern
// ... means the spread operator
[a, b, ...rest] = [100, 200, 300, 400, 500];

console.log(a);
console.log(b);

// the rest object contains what is left in the array
console.log(typeof rest);
console.log(rest);

({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500});
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500});

console.log(a,b);
console.log(rest);

// Array Destructuring
const people = ['John', 'Mikkel', 'Marky-mike'];

const [person1, person2, person3] = people;
console.log(person1, person2, person3);

// parse array returned from function
function getPeople() {
  return ['John', 'Mikkel', 'Marky-mike'];
}

let person4, person5, person6;
[person4, person5, person6 ] = getPeople();

// Object Destructuring

// Working with react or.. you might have modules which export
// specific objects, and you want to get specific functions or.. from those 
// exported objects

const friends = {
  name: 'John Doe',
  age: 32, 
  city: 'Miami',
  gender: 'male',
  sayHello: function() { console.log('Hello inside friends object');}
} 

// old ES5 
const nameOld = friends.name,
      ageOld = friends.age,
      cityOld = friends.city;

// New ES6 destructuring
const { name, age, city, sayHello } =  friends;

console.log(name, age, city);
sayHello();