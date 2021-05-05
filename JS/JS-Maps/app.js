// Maps = key-value pairs - can use ANY type as a key or value

map1 = new Map();

// set Keys 
const key1 = 'some string',
      key2 = {}, // empty object
      key3 = function() {}; // empty function

// set map values by key
map1.set(key1, 'Value of key 1');
map1.set(key2, 'Value of key 2');
map1.set(key3, 'Value of key 3');

// get values by key
console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// Count values
console.log(map1.size);

// ITERATING MAPS

// Loop using for..of to get keys and values
for(let[key, value] of map1) {
  console.log(`${key} = ${value}`);
}

// Keys only
for(let key of map1.keys()) {
  console.log(key);
}

// Values only
for(let value of map1.values()) {
  console.log(value);
}

// loop with forEach
map1.forEach(function(value, key) {
  console.log(`${key} = ${value}`);
});

// Convert to Arrays
// Create an array of KEY + VALUE pairs
const keyValArr = Array.from(map1);
console.log(keyValArr);

// Create an array of values
const valArr = Array.from(map1.values());
console.log(valArr);

// Create an array of keys

const keyArr = Array.from(map1.keys());
console.log(keyArr);