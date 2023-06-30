const todo = {};

todo.id = 1;
todo.name = 'lasse';

x = todo;


// spread operator
const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const obj3 = {...obj1, ...obj2};

// console.log(obj3);

x = Object.keys(todo); // returns array ['id', 'name']
x = Object.keys(todo).length; // returns 2 for items in array
x = Object.values(todo); // returns array [1, 'lasse']
x = Object.entries(todo); // returns key value pairs as arrays


console.log(x);

