'use strict';
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const list = document.querySelector('#ingredients');
const creatListOfItems = function (arr) {
  let addItem;
  const arrayOfItems = [];
  for (let i = 0; i < arr.length; i += 1) {
    addItem = document.createElement('li');
    addItem.textContent = arr[i];
    arrayOfItems.push(addItem);
  }
  return list.append(...arrayOfItems);
};
creatListOfItems(ingredients);