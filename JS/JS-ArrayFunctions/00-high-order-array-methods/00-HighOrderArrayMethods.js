// take in a callback function

// see all the available methods
// console.log(socials.__proto__);

// ------------- forEach ---------------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

const socials = ["Twitter", "LinkedIn", "Facebook", "Instagram"];
// socials.forEach((social) => console.log(social) );
// socials.forEach(social => console.log(social) );
// socials.forEach((social, index, array) => {
//   console.log(`${index} - ${social}`, array);
// });

/*
function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials);

const socialObjs = [
  { name: "Twitter", url: "https://twitter.com" },
  { name: "Facebook", url: "https://facebook.com" },
  { name: "LinkedIn", url: "https://linkedin.com" },
];

// socialObjs.forEach((obj) => console.log(obj));
socialObjs.forEach((obj) => console.log(obj.url));
*/

// ------------- FILTER ---------------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

/*
const result = socials.filter(social => social.length > 7);
console.log(result); 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers);
*/

// ------------- MAP ---------------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

/*
const array1 = [1, 4, 9, 16];

// returns new array with each index multiplied
const map1 = array1.map((x) => x * 2);

console.log("map: ", map1);
// Expected output: Array [2, 8, 18, 32]

const doubledNumbers = [];

// same with foreach
array1.forEach((number, index) => {
  doubledNumbers.push(number * 2); 
});
console.log('doubled numbers: ', doubledNumbers);
*/

// ------------- Reduce ---------------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// example, shopping cart with a number of items, reduce the price into a sum

/*
const itemsPrice = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = itemsPrice.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue // value of accumulator for first iteration
);

console.log(sumWithInitial);
// Expected output: 10
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sum = numbers.reduce((accumulator, currentValue) => {
//   accumulator + currentValue;
// }, 0); // initial value

const sum2 = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
); // shortened version

console.log(sum2);
// using a for loop

(function ReduceUsingForLoop() {
  let accumulator = 0;

  for (const number of numbers) {
    accumulator += number;
  }

  // console.log(accumulator);
  accumulator = 0;
})();

// shopping cart example

const cart = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 100 },
  { id: 3, name: 'Product 3', price: 100 },
];

// array of prices, then reduce

// const prices = cart.map(obj => obj.price );
// const cartSum = prices.reduce(
//         (acc, curr) => acc + curr, 0
// );

// for each product, add the price of the product to 
// the accumulator
const cartSum = cart.reduce((accumulator, product) => {
        return accumulator + product.price
}, 0);

console.log(cartSum);
