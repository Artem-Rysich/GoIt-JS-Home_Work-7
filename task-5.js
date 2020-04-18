'use strict;';
const input = document.getElementById('name-input');
const output = document.getElementById('name-output');
const handlerInput = event => {
  if (event.currentTarget.value === '') {
    output.textContent = 'Hезнакомец';
  } else {
    output.textContent = event.currentTarget.value;
  }
};
input.addEventListener('input', handlerInput);