// Iterator example

/*

function nameIterator(names) {
  // names is an array of names
  let nextIndex = 0;

  // return an object containing a next function
  return {
    next: function() {              // ? means then
      return nextIndex < names.length ? 
      // done: false means there is still more to iterate through
                                            // : means else
      {value: names[nextIndex++], done: false} : 
      {done: true}
    }
  }
}

const namesArr = ['Jack', 'Jill', 'John'];
// Init iterator and pass in the names of array
const names = nameIterator(namesArr);

console.log(names.next());


*/


// Generator Example

//* after function means its a function generator
/*
function* sayNames() {
  // The yield keyword is used to pause and resume a generator function
  yield 'Jack';
  yield 'Jill';
  yield 'John';
}

const name = sayNames();

console.log(name.next());
console.log(name.next());
console.log(name.next());

*/

//ID Creator
function* createIDs() {
  let index = 0;

  while(true) {
    yield index++;
  }
}

const gen = createIDs();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);