/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 * @version 3.0.0
 * @author Lasse
 * @license MIT
 */

class EasyHTTP {
 
  // make a HTTP GET request
  async get(url) {
    // continues once fetch promise is resolved
    const response = await fetch(url);
    // continues onces the response promisse is resolved
    const resData = await response.json();
    return resData;
  }

  async post(url, data) {
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    // continues onces the response promisse is resolved
    const resData = await response.json();
    return resData;
  }
  
  async put(url, data) {
  
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })

    // continues onces the response promisse is resolved
    const resData = await response.json();
    return resData;
  }
  
  async delete(url) {
  
    
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        },
        // body is removed because we are deleting a post, not sending data
      })
    
    const resData = await 'ressource deleted';
    return resData;
  }

}