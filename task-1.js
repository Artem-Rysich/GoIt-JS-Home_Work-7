'use strict';
const numberOfCategories = document.querySelectorAll('.item');
console.log(`В списке ${numberOfCategories.length} категории.`);
const titleOfItem = document.querySelectorAll('h2');
const lengthOfItem = document.querySelectorAll('.item > ul');
titleOfItem.forEach(title => console.log(title.textContent));
lengthOfItem.forEach(len => console.log(len.children.length));
function getNameAndLength(title, value) {
  for (let i = 0; i < title.length; i += 1) {
    console.log(`Категория: ${title[i].textContent}`);
    console.log(`Количество елементов: ${value[i].children.length}`);
  }
}
getNameAndLength(titleOfItem, lengthOfItem);