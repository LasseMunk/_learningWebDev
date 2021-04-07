class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
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

  showAlert(message, className) {
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

  deleteBook(target) {
    if(target.className === 'delete') {
      // up to td tag, then to tr tag and remove
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

class Store {
  static getBooks() {
    // fetch from local storage
    let books; 
    if(localStorage.getItem('books') === null) {
      // if it's empty, then set it to empty array
      books = [];
    } else {
      // parse as javascript object
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }
  static displayBooks() {
    // display books in UI
    const books = Store.getBooks();

    books.forEach(function(book) {
      const ui = new UI;

      // Add Book to UI
      ui.addBookToList(book)
    });

  }
  static addBook(book) {
    const books = Store.getBooks();
    // add/push the book to the localStorage array
    books.push(book);
    // save it as a string inside localStorage
    localStorage.setItem('books', JSON.stringify(books));

  }
  static removeBook(isbn) {
    // get books from localStorage
    const books = Store.getBooks();
    books.forEach(function(book, index) {
      if(book.isbn === isbn)
      // delete current index of books array from local storage
      // if the isbn from the pressed X in the UI
      // matches the isbn of the current index of books array
      books.splice(index, 1);
    });

    // save it as a string inside localStorage
    localStorage.setItem('books', JSON.stringify(books));

  }
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks());

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
    Store.addBook(book);
  
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

  // Remove from local storage
  // remove by isbn number
                      // <a> parent <td>   isbn <td>             isbn <td> textcontent 
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show alert message
  ui.showAlert('Book Removed', 'success');
  
  e.preventDefault();
});
