window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const loanValues = {
    amount: 1000,
    years: 5,
    rate: 5
  }

  let inputAmount = document.getElementById('loan-amount');
  let inputYear = document.getElementById('loan-years');
  let inputRate = document.getElementById('loan-rate');

  inputAmount.value = loanValues.amount;
  inputYear.value = loanValues.years;
  inputRate.value = loanValues.rate;

  update()
};

// Get the current values from the UI
// Update the monthly payment
function update() {
  const newValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(newValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const perInterestRate = (values.rate/100)/12
  const totalPayments = Math.floor(values.years * 12)
  const principle = values.amount

  let monthlyValue = ((principle * perInterestRate)/(1 - Math.pow(1 + perInterestRate, -totalPayments))).toFixed(2);

  return monthlyValue;

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPage = document.getElementById('monthly-payment');
  monthlyPage.innerText = '$' + monthly;
}
