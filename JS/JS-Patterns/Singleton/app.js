// SINGLETON PATTERN

// IFFE object and can only return 1 instance of the object
// eventhough multiple calls to the constructor happens
// it maintains a private reference which nothing from the outside can access

// Use cases: 
// Login user
// will prevent you from two users being created at once

// Is sometimes frowned upon because they give a global point of access
// instead of embracing encapsulation

// Brad doesn't use it too much


const Singleton = (function() {
  let instance;

  function createInstance() {
    const object = new Object({name: 'Lasse'});
    return object;
  }

  return {
    getInstance: function() {
      if(!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instanceA = Singleton.getInstance();

