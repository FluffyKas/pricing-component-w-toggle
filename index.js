const monthlySwitch = document.getElementById('monthly');
const annuallySwitch = document.getElementById('annually');

const priceBasic = document.querySelector('.price-basic');
const priceProf = document.querySelector('.price-prof');
const priceMaster = document.querySelector('.price-master');

monthlySwitch.addEventListener('click', () => {
  priceBasic.textContent = '$19.99';
  priceProf.textContent = '$24.99';
  priceMaster.textContent = '$39.99';
})

annuallySwitch.addEventListener('click', () => {
  priceBasic.textContent = '$199.99';
  priceProf.textContent = '$249.99';
  priceMaster.textContent = '$399.99';
})


// isChecked function prevents falling back to default monthly pricing when the page is refreshed
// dumb solution but at least it works, until I come up with something cleaner ^^

function isChecked() {
  if (annuallySwitch.checked) {
    priceBasic.textContent = '$199.99';
    priceProf.textContent = '$249.99';
    priceMaster.textContent = '$399.99';
  }
}

isChecked();