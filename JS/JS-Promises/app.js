const posts = [
  {title: 'post one', body: 'this is post one'},
  {title: 'post two', body: 'this is post two'}
];

function createPost(post) {
  return new Promise (function(resolve, reject){
    // resolve is called when we are done with what we are doing
    // reject is called if there is some kind of error
    
    setTimeout(function() {
      posts.push(post);
      const error = false;

      if(!error) {
        resolve();
      } else {
        reject('error: something went wrong');
      }
    }, 2000);
    
  });
}

function getPosts() {
  setTimeout(function(post){
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// .then is fired when the promise returns
createPost({title: 'Post Three', body: 'This is post three'})
  .then(getPosts)
  // catch is triggered when the reject() is fired because of error
  .catch(function(err) {
    console.log(err);
  });