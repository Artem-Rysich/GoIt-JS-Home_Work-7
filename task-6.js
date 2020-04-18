'use strict';
const input = document.getElementById('validation-input');
const handlerInput = event => {
  const validLength = Number(input.getAttribute('data-length'));
  if (event.currentTarget.value.length !== validLength) {
    input.classList.add('invalid');
  } else {
    input.classList.add('valid');
  }
};
input.addEventListener('change', handlerInput);