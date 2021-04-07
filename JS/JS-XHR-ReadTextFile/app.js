document.getElementById("button").addEventListener('click', loadData);

function loadData() {
  // create an XHR object

  const xhr = new XMLHttpRequest();

  // readyState values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready

  // OPEN - specify the type of request, and url
  // we're making the request to
  // read async therefore the 3rd param is true
  xhr.open('GET', 'data.txt', true);

  console.log('READYSTATE', xhr.readyState);
  
  // Optional - used for spinners / loaders
  xhr.onprogress = function(){
    // readyState 3 - processing requests
    console.log('READYSTATE', xhr.readyState);
  }


  xhr.onload = function() { // onload is readyState 4
    console.log('READYSTATE', xhr.readyState);
    // HTTP common status 
      // 200: ok
      // 403: Forbidden
      // 404: "not found"
    //  if this xhr object is okay then..
    if(this.status === 200) {
      // responseText is the data which is included in the file
      // console.log(this.responseText);

      document.getElementById('output').innerHTML = `
      <h1>${this.responseText}</h1>
      `
    }
  }

  xhr.onerror = function() { // runs only if error
    console.log('request error');
  }

  xhr.send();


}