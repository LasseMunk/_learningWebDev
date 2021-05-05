// SETS is a list (or set) of unique values or primitives
// store unique values of any type

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('a string');
set1.add({name: 'john'});
set1.add(true);
// set1.add(100); 
// doesn't add to the set, because the number 100 is already there

console.log(set1);

const set2 = new Set([1, true, 'string']);

console.log(set2);

// get Count
console.log(set1.size);

// check for values
console.log(set1.has(100)); // true because 100 is in the set
console.log(set1.has(50+50)); // true because 100 is in the set
console.log(set1.has({name: 'john'})); // false, because the object is a reference
// type which isn't stored in the stack - its stored in the heap

console.log('hello' === 'hello'); // return true, because a string is a primitive
// value which is stored in the stack. Therefore 'hello' is the same as 'hello'

// Delete from set 
set1.delete(100);
console.log(set1);

// ITERATE THROUGH SETS

// for...of
for(let item of set1) {
  // 100 will not show up because we just deleted it above
  console.log(item);
}

// sets are NOT KEY-VALUE pairs, so we can use .values()
for(let item of set1.values()) {
  // 100 will not show up because we just deleted it above
  // and get the same thing as set1.keys() and just set1
  console.log(item);
}

// ForEach Loop
set1.forEach((value) => {
  console.log(value);
});

// CONVERT SET TO ARRAY
const setArr = Array.from(set1);
console.log(setArr);