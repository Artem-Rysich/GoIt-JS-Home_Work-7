'use strict';
const input = document.getElementById('validation-input');
input.addEventListener('change', handlerInput);
function handlerInput(event) {
  const validLength = Number(input.getAttribute('data-length'));
  if (event.currentTarget.value.length === validLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}
