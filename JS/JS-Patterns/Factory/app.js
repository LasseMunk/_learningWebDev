  // FACTORY PATTERN

  // Create interface for creating objects
  // Manage, maintain and manipulate collections of objects which are different
  // but have many similar characteristics
  // like paid memberships on a website where members have different types
  // but is still a member of this website

// this website enables us to create member factory with different types of members

function MemberFactory() {
  this.createMember = function(name, type) {
    let member; 

    // check member type
    // and create correct membership accordingly
    if(type === 'simple') {
      member = new SimpleMembership(name);
    } else if (type === 'standard') { 
      member = new StandardMembership(name);
    } else if (type === 'super') {
      member = new SuperMembership(name);
    }

    member.type = type;

    // 1 function associated, spit out name, type and cost of membership

    member.define = function() {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    }

    return member; 
  }
}

const SimpleMembership = function(name) {
  this.name = name;
  this.cost = '$5';
}

const StandardMembership = function(name) {
  this.name = name;
  this.cost = '$15';
}

const SuperMembership = function(name) {
  this.name = name;
  this.cost = '$25';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('John Doe', 'simple'));
members.push(factory.createMember('Lasse Munk', 'super'));
members.push(factory.createMember('Peter Pan', 'standard'));

// console.log(members);

members.forEach(function(member) {
  member.define();
})