
const user = {email: 'jdoe@gmail.com'};

  // myFunction(); // will produce a reference error, script will stop
try {
  // myFunction(); // will produce a reference error, script will continue
  // null.myFunction(); // will produce TypeError

  // console.log(eval('2+2')); // evaluate js
  // will Syntax Error
  // console.log(eval('hello world')); 
      // the strings hello and world will, be considered as variable names
      // therefore syntax error

  // URI Error
  // decodeURIComponent('www.google.com'); // well formatted URI
  // decodeURIComponent('%'); // badly formatted URI

  if(!user.name) {
    //  throw error if no name key in object
    // throw 'User has no name';
    throw new SyntaxError('User has no name');
  }

} catch(e) {
  // console.log(e); // full error
  // console.log(e.message); // only the message 
  // console.log(e.name); // only reference error
  // console.log(e instanceof ReferenceError); // test if ReferencError
  // console.log(e instanceof TypeError); // test if TypeError
  // console.log(`format your error however you like.. maybe include ${e}`);
  console.log(`User Error: ${e.message}`); // in collaboration with throw
    // format the error yourself
} finally {
  console.log('Finally runs regardless of result');
}

console.log('program continues');