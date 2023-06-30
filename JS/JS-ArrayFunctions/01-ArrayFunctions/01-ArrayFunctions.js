const arr = [1, 2, 3, 4, 5];
let x;

/*
// edit current array
arr.push(100); // adds 100 to the end
arr.pop(); // removes 100 from the end
arr.unshift(99); // adds 99 to the 0 index
arr.shift(); // removes 99 from the beginning
arr.reverse(); // reverses to [5, 4, 3, 2, 1]
console.log(arr);
*/

// get something from array
x = arr.includes(200); // check if includes 200, boolean
x = arr.indexOf(1); // returns 0
x = arr.indexOf(999); // -1, doesn't exist
x = arr.slice(2); // output array from index 2 to end

/*

// the original array is unchanged. returns copy
x = arr.slice(1, 3); // outputs new array [2, 3]
console.log('new array', x);
console.log('original array: ', arr);
console.log('');

console.log('Splice removes range from original array:');
// start at 1, take out 3 (index 1, 2, 3)
x = arr.splice(1, 3); // removes range from original array
console.log('new array:', x);
console.log('original array: ', arr);
console.log('');

*/

// Chaining methods

x = arr .splice(1, 4)   // start index 1, output next 4 meaning index 1, 2, 3, 4
        .reverse()      // reverse range of new array (5, 4,3 ,2)
        .toString();    // convert to string

// nesting arrays
const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'raspberry'];

// fruits.push(berries); // insert berries on index 3

// x = fruits[3][1]; // return index 1 from berries

// concatenating arrays - take items from one array and add them to another array

x = fruits.concat(berries); // returns new array with everything from fruits followed by everything from berries

// spread operator ...
// take items from both arrays, and put them in a new array
x = [...fruits, ...berries];

// flatten arrays
const arrNested = [1, 2, [3, 4], 5, [6, 7], 8];
// wilt output [1, 2, 3, 4, 5, 6, 7, 8]
x = arrNested.flat();

console.log(x);

