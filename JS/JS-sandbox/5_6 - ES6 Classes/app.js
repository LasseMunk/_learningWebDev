class Person {
  // constuctor properties being passed in 
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }
  
  // Static methods is one which you can use without instantiating an object from the class
  // if you don't use 'this.XXXX' in your method, then it's a good usecase for a static method
  static addNumbers(x, y) {
    return x + y;
  }
}


const mary = new Person('Mary', 'Williams', '11-13-1980');

mary.getsMarried('Thompson');

console.log(mary);

// Use the class name to use the static method
console.log(Person.addNumbers(1,2));