// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
// The function greeting is assigned using the prototype
Person.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');

// greeting can now be called
console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  // membership is like a status of this customer

  // call is a function that allow us to call another function from the current context
  // so we call the Person function from within this function
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

console.log(customer1);

// Customer greeting
// even though the greeting is inherited from Person, we can make a
// custom Customer.greeting function which overwrites the inherited one
Customer.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
}

console.log(customer1.greeting());