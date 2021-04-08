// arrow function using a lexical 'this' which means we don't have to worry about
// scope when wanting to use this.xyz inside a function

document.getElementById("button1").addEventListener('click', getText);
document.getElementById("button2").addEventListener('click', getJson);
document.getElementById("button3").addEventListener('click', getExternal);

// Get local text file data
function getText(){
  fetch('test.txt')
    // .then(function(res){ without arrow function
    //   // because the .txt is text
    //   // if json then res.json()
    //   return res.text();
    // })
    .then(res => res.text())
    // res.text() returns a promise therefore
    .then(data => {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
  }

// Get local JSON data
function getJson(){
  fetch('posts.json')
    // .then(function(res){
    //   // because the .txt is text
    //   // if json then res.json()
    //   return res.json();
    // })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(function(post) {
        // append to output
        output += `
        <li>${post.title}</li>
        `;

        document.getElementById('output').innerHTML = output;
      })
    })
    .catch(err => console.log(err));
  }

// Get from external API
function getExternal(){
  fetch('https://api.github.com/users')
    .then(res => res.json())
    // res.text() returns a promise therefore
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(function(user) {
        // append to output
        output += `
        <li>${user.login}</li>
        `;

        document.getElementById('output').innerHTML = output;
      })
    })
    .catch(err => console.log(err));
  }