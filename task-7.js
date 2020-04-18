'use strict';
const input = document.getElementById('font-size-control');
const inputText = document.getElementById('text');
const handlerSize = event => {
  inputText.style.fontSize = event.currentTarget.value + 'px';
};
input.addEventListener('input', handlerSize);