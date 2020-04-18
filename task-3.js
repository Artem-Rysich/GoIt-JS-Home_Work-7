'use strict';
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const list = document.querySelector('#gallery');
list.classList.add('list');
const creatImages = function (arr) {
  const objectOfArray = arr.map(
    object => `<li><img src = "${object.url}" alt = "${object.alt}"></li>`,
  );
  return list.insertAdjacentHTML('afterbegin', objectOfArray.join(' '));
};
creatImages(images);
const image = document.querySelectorAll('#gallery > li > img');
image.forEach(obj => obj.classList.add('list-img'));