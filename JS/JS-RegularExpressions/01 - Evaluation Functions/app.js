let re;

re = /hello/;
// re = /hello/g; // global search. If one has a paragraph, it will search for
  // all instances of word in the paragraph

// console.log(re); // /hello/
// console.log(re.source); // hello

// exec() - retul result in an array or null
// const result = re.exec('lasse hello world'); // hello matches and starts and index 6
// const result = re.exec('jamanderhello'); // will also match because hello is part of the word
// const result = re.exec('hi'); // hi is not a match, result is null
// console.log(result);
// console.log(result.index);
// console.log(result.input); // the input string

// test() - returns true or false
// const result = re.test('Hello'); // false, because uppercase H in Hello
// const result = re.test('hello'); // true

// re = /hello/i; // i flag makes it true, no matter if upper or lower case
  // i : case insensitive

// const result = re.test('hello'); // true
// const result = re.test('Hello'); // true


// match() - return result array or null
// const str = 'hello there';
// const result = str.match(re);
// console.log(result);

// search - return the index of the first match if not found return negative one
// const str = 'hello there';
// const result = str.search(re);
// console.log(result);

// replace() - will return a new string, with some or all matches of a pattern
const str = 'hello there';
const newStr = str.replace(re, 'hi');
console.log(newStr);
