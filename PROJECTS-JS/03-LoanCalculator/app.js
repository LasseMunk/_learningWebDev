document.getElementById('loan-form').addEventListener('submit', function(e){
  // hide results
  document.getElementById('results').style.display = 'none';
  // show loader 
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 2000);
    // it's a form submit so:
    e.preventDefault();
});


// Calculate Results
function calculateResults() {
  
console.log("calculating");

  // UI Vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  // the value of the loan in float
  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // compute monthly payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x-1);

  if(isFinite(monthly)) {
    // if the amount is a finite value, then set the 
    // monthlyPayment, with 2 decimals (toFixed(2))
    monthlyPayment.value = monthly.toFixed(2);

    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

    // show results
    document.getElementById('results').style.display = 'block';

    // hide loader
    document.getElementById('loading').style.display = 'none';

  } else {
    showError('Please check your numbers');

    // hide loader and results
    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'none';
  }

  
}

// show error
function showError(error) {
  // Create div
  const errorDiv = document.createElement('div');

  // Get alements
  // the card is the parent div
  // insert before heading

  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add class
  // alert-danger will make it red. Its bootstrap specific
  errorDiv.className = 'alert alert-danger';

  // create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // insert error above/before heading ('loan calculator')
  card.insertBefore(errorDiv, heading);

  // clear error after 3000 ms
  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector('.alert').remove();
}