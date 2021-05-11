// STATE PATTERN

// Behavioural type pattern
// statemanagers like redux
// do some specific things, show specific content on specific states

// This project shows different content depending on the state we are in



const PageState = function() {
  let currentState = new homeState(this);

  this.init = function() {
    // when init is called, new homeState
    // if new aboutState - the landing page will display About page
    this.change(new homeState);
    // this.change(new aboutState);
  } 

  this.change = function(state) {
    currentState = state;
  }
};

// Home State
const homeState = function(page) {
  // modify the content of page depending on state
  // display boot strap 'jumbotron'
  document.querySelector('#heading').textContent = null;
  document.querySelector('#heading').innerHTML = `
    <div class="jumbotron">
      <h1 class="display-4">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
    </div>
  `;
}

// About State
const aboutState = function(page) {
  document.querySelector('#heading').textContent = 'About Us';
  document.querySelector('#heading').innerHTML = `
    <p> This is the about page</p>
  `;
};

// Contact State
const contactState = function(page) {
  document.querySelector('#heading').textContent = 'Contact Us';
  document.querySelector('#heading').innerHTML = `
    <form>
    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-content">
    </div>
    <div class="form-group">
      <label>Email Address</label>
      <input type="email" class="form-control">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `;
};

// Instantiate pageState

const page = new PageState();

// Init the first state
page.init();

// UI Vars
const home = document.getElementById('home'),
      about = document.getElementById('about'),
      contact = document.getElementById('contact');

// Event listners
home.addEventListener('click', (e) => {
  page.change(new homeState);
  
  e.preventDefault();
});
about.addEventListener('click', (e) => {
  page.change(new aboutState);
  
  e.preventDefault();
});
contact.addEventListener('click', (e) => {
  page.change(new contactState);
  
  e.preventDefault();
});