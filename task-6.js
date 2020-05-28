'use strict';
const input = document.getElementById('validation-input');
input.addEventListener('change', handlerInput);
function handlerInput(event) {
  const validLength = Number(input.getAttribute('data-length'));
  if (event.currentTarget.value.length === validLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}
