document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
  const name = document.getElementById('name');
  // lowercase or uppercase, between 2 and 10 characters
  const re = /^[a-zA-Z]{2,10}$/;
  
  if(!re.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}
function validateZip() {
  const zip = document.getElementById('zip');
  // Start with 5 numbers, and an optional additional - followed by 4 numbers
  // ? makes it optional, () means a group
  const re = /^[0-9]{5}(-[0-9]{4})?$/;
  
  if(!re.test(zip.value)) {
    zip.classList.add('is-invalid');
  } else {
    zip.classList.remove('is-invalid');
  }
}
function validateEmail() {
  const email = document.getElementById('email');
  // letters, numbers, underscore '_' , dashes '-' and dots '.'
  // + searches for more than 1 character
  // outside of group: @ means a literal add-sign
  // letters, numbers, underscore '_' , dashes '-' and dots '.'
  // outside of group: \. ,eams literal dot '.'
  // last part accept lower- and uppercase letters between 2 and 5 characters long
        // used for country name (TLD) 
        // https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  
  if(!re.test(email.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}
function validatePhone() {
  const phone = document.getElementById('phone');
  // optional literal parentheses containing 3 digits
  // separate with optional dash, dot or space
  // optional dash dot or space
  // 3 digits ---> {3} is a quantifier 3
  // optional dash dot or space
  // 4 digits
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
  
  if(!re.test(phone.value)) {
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}