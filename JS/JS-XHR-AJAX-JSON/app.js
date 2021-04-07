// JSON = javascript object notation
// validate json: jsonlint.com

document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  // true for async
  xhr.open('GET', 'customer.json', true);

  xhr.onload = function() {
    if(this.status === 200) {
      // console.log(this.responseText);
      // parse the reponse which is a json string as js object
      const customer = JSON.parse(this.responseText);

      // ${customer. xxxx} refers to the customer JSON.parsed object
      const output = `
      <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.phone}</li>
      </ul>
      `;

      document.getElementById('customer').innerHTML = output;
   
    }
  }

  xhr.send();
}

function loadCustomers(e) {
  const xhr = new XMLHttpRequest();

  // true for async
  xhr.open('GET', 'customers.json', true);

  xhr.onload = function() {
    if(this.status === 200) {
      // console.log(this.responseText);
      // parse the reponse which is a json string as js object
      const customers = JSON.parse(this.responseText);

      let output = '';
      
      customers.forEach(function(customer){
        // ${customer. xxxx} refers to the customer JSON.parsed object
        // += will append to the output variable
        output += `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
        `;
      })


      document.getElementById('customers').innerHTML = output;
   
    }
  }

  xhr.send();
}