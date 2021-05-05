/*
// Basic structure

// iffe - immediately invoked function expression
(function() {
  // declare private variables and functions

  return {
    // declare public variables and functions

  }
})();

*/

/*
// STANDARD MODULE PATTERN
const UICtrl = (function() {
  // this is private
  let text = 'hello world';

  const changeText = function() {
    const element = document.querySelector('h1');
    element.textContent = text;
  }

  return {
    // this is public
    callChangeText: function () {
      changeText();
      // console.log(text);
    }
  }
})();

UICtrl.callChangeText();
*/

// REVEALING MODULE PATTERN
  // Instead of returning public functions
  // you map to private function inside the module

  const ItemCtrl = (function() {
    // naming convention underscore _var-name is for private variables
    let _data = [];

    function add(item) {
      _data.push(item);
      console.log('item added...');
    }

    function get(id) {
      return _data.find(item => {
        return item.id === id;
      })
    }

    return {
      // reveals the add and get function
      add: add,
      get: get
    }
  })();

  // Revealing module patterns return object looks cleaner, but the 
  // standard module return object lets you do more in the function which is returned

  ItemCtrl.add({id: 1, name: 'john'});
  // get item with ID of 1
  console.log(ItemCtrl.get(1));