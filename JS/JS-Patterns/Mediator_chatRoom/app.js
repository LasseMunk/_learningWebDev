// MEDIATOR PATTERN
// The chatroom is the mediator
// the user is the collegues of the chatroom
const User = function(name) {
  // constructor for a new user
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function(message, to) {
    // this means which user is sending a message
    this.chatroom.send(message, this, to);
  },
  receive: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}


const Chatroom = function() {
  let users = {}; // list of users

  return {
    // the users (collegues) have to register with the chatroom (the mediator)
    register: function(user) {
      users[user.name] = user;
      // by default the users chatroom is null, but we 
      // set it here
      user.chatroom = this;
    },
    send: function(message, from, to) {
      // is the message to a specific user or 
      // broadcasted to the entire room
      if(to) {
        // Single user message
        to.receive(message, from);
      } else {
        // broadcasted (mass) message
        for(key in users) {
          // don't send to the user who is broadcasting
          // the message
          if(users[key] !== from) {
            users[key].receive(message, from);
          }
        } 
      }
    }
  }
}

const brad = new User('Brad');
const jeff = new User('Jeff');
const sara = new User('Sara');

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sara);

brad.send('Hello Jeff', jeff);
sara.send('Hello Brad, you are sick!', brad);
jeff.send('Hello Everyone!!'); // send to everyone