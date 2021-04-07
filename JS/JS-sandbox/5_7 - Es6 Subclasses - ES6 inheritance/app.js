class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    // super calls the parents class constructor
    // therefore pass the firstName and lastName as the Person constructor expects
    super(firstName, lastName);

    this.phone = phone; 
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer('John', 'Doe', '1234', 'standard');

// there is no greeting method in Customer, but we extend Person, therefore we are able to call greeting();
console.log(john.greeting()); 

console.log(Customer.getMembershipCost());