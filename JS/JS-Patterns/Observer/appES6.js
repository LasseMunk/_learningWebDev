// Observer Pattern
// Allow to subscribe and unsubscribe to specific events
// e.g. allow the DOM to be updated on specific events
// REACT relies on it through eventmanagement

// Constructor class
class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    // the input is a function one can subscribe to
    this.observers.push(fn);
    console.log(`you are now subscribed to ${fn.name}`);
  }

  unsubscribe(fn) {
    // The filter() method creates a new array with all elements that pass the test implemented by the provided function.

    // Filter out from the list whatever matches the callback function. If there 
    // is no match, the callback gets to stay on the list.
    // The filter returns a new list and reassigns the list of observers

    this.observers = this.observers.filter(function(item){
      // item represents the function stored in this.observers
      if(item !== fn) {
        return item;
      }
    });
    console.log(`you are now unsubscribed from ${fn.name}`);
  }

  fire() {
    this.observers.forEach(function(item) {
      // call whatever function is in the current observers array id
      item.call();
    });
  }
}

const click = new EventObserver();

// Event Listeners
document.querySelector('.sub-ms').addEventListener('click', function(){
  click.subscribe(getCurMilliseconds);
});
document.querySelector('.unsub-ms').addEventListener('click', function(){
  click.unsubscribe(getCurMilliseconds);
});
document.querySelector('.sub-s').addEventListener('click', function(){
  click.subscribe(getCurSeconds);
});
document.querySelector('.unsub-s').addEventListener('click', function(){
  click.unsubscribe(getCurSeconds);
});
document.querySelector('.fire').addEventListener('click', function(){
  click.fire();
});

// Click Handler
const getCurMilliseconds = function() {
  console.log(`Current ms: ${new Date().getMilliseconds()}`);
}
const getCurSeconds = function() {
  console.log(`Current s: ${new Date().getSeconds()}`);
}

