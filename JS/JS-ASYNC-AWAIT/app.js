/*

// async makes the function return a promise
async function myFunc(){
  // return 'Hello';

  const promise =  new Promise((resolve, reject) => {
    setTimeout(() => resolve ('hello'), 1000);    
  });

  const error = true;

  if(!error) {
    const res = await promise; // await until promise is resolved
    return res; // returns res 'hello' after 1000 ms
  } else {
    await Promise.reject(new Error('something went wrong'));
  }

}

myFunc()
  .then(res => console.log(res))
  .catch(err => console.log(err));

  */

  async function getUsers() {
    // await the response of the fetch call
    const response = await fetch
    ('https://jsonplaceholder.typicode.com/users');

    // only proceed once the response is resolved
    const data = await response.json();

    // only proceed once the second promise is resolved;
    return data;
  }

  getUsers().then(users => console.log(users));