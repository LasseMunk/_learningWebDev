// ES5 OOP (old) way

// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
// everything else goes into the prototype
function UI() {}
// Add Book to list
UI.prototype.addBookToList = function(book) {
  // the tbody of the book list
  const list = document.getElementById('book-list');

  // create table row element
  const row  = document.createElement('tr');
  // insert colls
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;

  list.appendChild(row);
  
}

UI.prototype.showAlert = function(message, className) {
  // Create error div
  const div = document.createElement('div');
  // Add Classes
  div.className = `alert ${className}`;
  // add text
  div.appendChild(document.createTextNode(message));
  // get Parent
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  
  // insert alert div before the book form
  container.insertBefore(div, form);

  // timeout after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 3000);
}

// Delete Book
UI.prototype.deleteBook = function(target) {
  if(target.className === 'delete') {
    // up to td tag, then to tr tag and remove
    target.parentElement.parentElement.remove();
  }
}

// Clear form input fields
UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// Event listener for 'ADD BOOK'
document.getElementById('book-form').addEventListener('submit', function(e){
  
  // contents of the input fields when submit button is pressed
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  // Instantiate a book
  const book = new Book(title, author, isbn);

  // instantiate UI object
  const ui = new UI();

  // Validate if input values
  if(title === '' | author === '' | isbn === '') {
    // Error Alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {   
    // Add book to list
    ui.addBookToList(book);
  
    // show succes message
    ui.showAlert('Book Added', 'success');

    // clear form input fields
    ui.clearFields();
  }

  // prevent button from redirecting / reloading the page
  e.preventDefault();
});

// Event Listener for delete 

document.getElementById('book-list').addEventListener('click', function(e) {

  // if we click anywhere inside the book list, this fires. therefore we filter the click 
  // and delete the correct book by

  const ui = new UI();

  // DELETE BOOK
  // e.target is which X has been pressed
  ui.deleteBook(e.target);

  // Show alert message
  ui.showAlert('Book Removed', 'success');
  
  e.preventDefault();
});
