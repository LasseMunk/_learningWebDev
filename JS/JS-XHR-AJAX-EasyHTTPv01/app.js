const http = new easyHTTP;
/*
// Get All Posts
http.get('https://jsonplaceholder.typicode.com/posts', function(err, response) {
  // if err is true
  if(err) {
    console.log(err);
  } else {
    console.log(response);
  }
});

// Get 1 Post
http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
  // if err is true
  if(err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
*/

//  Create Data
const data = {
  title: 'Custom Post',
  body: 'this is a custom post'
};

// create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
//   if(err) {
//     console.log(err) 
//   } else {
//     console.log(post);
//   }
// })

// Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// })

// DELETE POST
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
  // if err is true
  if(err) {
    console.log(err);
  } else {
    console.log(response);
  }
});