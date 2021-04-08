// easy HTTP AJAX library using prototypes instead of classes

function easyHTTP() {
  this.http = new XMLHttpRequest();
}
  // Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
  // true = async
  this.http.open('get', url, true);

  // ES5 cannot use this. inside the function
  // because it's in the function scope. this.
  // inside the function points to the function itself
  // ES6 solves this using arrow functions
  // this.http.onload = () => {
  
  let self = this;
  this.http.onload = function () {
    if(self.http.status  === 200) {
      // if the response is OK then
      // send null instead of error - because everything was good
      callback(null, self.http.responseText);
    } else {
      // send back error if there is one
      callback('Error: ' + self.http.status)
    }
  }
  this.http.send();
}

easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);
  // set the the type of content we wish to send
  this.http.setRequestHeader('content-type', 'application/json');

  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
    
  }

  // stringify transforms the javascript object 'data' to a string
  this.http.send(JSON.stringify(data))
}

easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);
  // set the the type of content we wish to send
  this.http.setRequestHeader('content-type', 'application/json');

  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
    
  }

  // stringify transforms the javascript object 'data' to a string
  this.http.send(JSON.stringify(data))
}

easyHTTP.prototype.delete = function(url, callback) {
  // true = async
  this.http.open('DELETE', url, true);

  // ES5 cannot use this. inside the function
  // because it's in the function scope. this.
  // inside the function points to the function itself
  // ES6 solves this using arrow functions
  // this.http.onload = () => {
  
  let self = this;
  this.http.onload = function () {
    if(self.http.status  === 200) {
      // if the response is OK then
      // send null instead of error - because everything was good
      // response is an empty object because we are deleting the object
      callback(null, 'Post Deleted');
    } else {
      // send back error if there is one
      callback('Error: ' + self.http.status)
    }
  }
  this.http.send();
}