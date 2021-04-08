// const sayHello = function() {
//   console.log('hello');
// }

// const sayHello = () => {
//   console.log('hello');
// }

// one line function does not need braces
// const sayHello = () => console.log('Hello');
// sayHello(); 

// returns hello, so need to console.log the function
// const sayHello = () => 'Hello';

// Returning Object Literals
// const sayHello = () => ({msg: 'Hello'});
// console.log(sayHello());

// single param does not need parenthesis
// const sayHello = name => console.log(`hello ${name}`);
// sayHello('lasse');

// Multiple param needs parenthesis
// const sayHello = (firstName, lastName) => console.log(`hello ${firstName} ${lastName}`);
// sayHello('lasse', 'munk');

const users = ['nathan', 'john', 'william'];

// map returns an array of something different. In this case
// an array of the length of usernames
// const nameLength = users.map(function(name){
//   return name.length;
// });

// shorter version using arrow
// const nameLength = users.map((name) => {
//   return name.length;
// });

// shortest
// returns name.length
const nameLength = users.map(name => name.length);

console.log(nameLength);