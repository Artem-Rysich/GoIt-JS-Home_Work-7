'use strict';
const decrement = document.querySelector(
  '#counter > [data-action = "decrement"]',
);
const increment = document.querySelector(
  '#counter > [data-action = "increment"]',
);
const counter = document.getElementById('value');
let initialValue = 0;
const handlerDecrement = () =>{
  initialValue = initialValue -= 1;
  counter.textContent = initialValue;
};
const handlerDicrement = () =>{
  initialValue = initialValue += 1;
  counter.textContent = initialValue;
};
decrement.addEventListener('click', handlerDecrement);
increment.addEventListener('click', handlerDicrement);