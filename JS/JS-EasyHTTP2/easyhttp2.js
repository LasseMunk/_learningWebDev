/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 * @version 2.0.0
 * @author Lasse
 * @license MIT
 */

class EasyHTTP {
 
  // make a HTTP GET request
  get(url) {
    return new Promise((resolve, reject) => {
    
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
        
    });
  }

  post(url, data) {
    return new Promise((resolve, reject) => {
    
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
        
    });
  }
  
  put(url, data) {
    return new Promise((resolve, reject) => {
    
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })

        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
        
    });
  }
  
  delete(url) {
    return new Promise((resolve, reject) => {
    
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        },
        // body is removed because we are deleting a post, not sending data
      })

        .then(res => res.json())
        // it returns an empty object, so we return the string instead
        .then(() => resolve('ressource deleted'))
        .catch(err => reject(err));
        
    });
  }
}