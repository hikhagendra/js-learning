// initial: the initial money sum
// interest: e.g. 0.05 means 5% per year
// years: how many years to wait

let form = document.forms.calculator;
let moneyBefore = document.getElementById('money-before');
let moneyAfter = document.getElementById('money-after');
let diagramAfter = document.getElementById('height-after');

form.addEventListener('input', function(event) {
  updateResult();
});

function updateResult() {
  let initial = form.elements.money.value < 0 ? 0 : form.elements.money.value;
  let interest = (form.elements.interest.value < 0) ? 0 : form.elements.interest.value / 100;
  let years = form.elements.months.value / 12;
  let result = Math.round(initial * (1 + interest) ** years);

  // Update data
  moneyBefore.textContent = initial;
  moneyAfter.textContent = result;

  // Update diagram
  diagramAfter.style.height = (result / initial) * 100 + 'px';
}

updateResult();