"use strict";


let randomColor = function (min, max) {
  return Math.trunc(Math.random() * max - min + 1);
};

let body = document.querySelector('body')
document.addEventListener("scroll", function (e) {
  e.preventDefault();
  let string = `rgb(${randomColor(0, 255)},${randomColor(0, 255)},${randomColor(
    0,
    255
  )})`;
  body.style.backgroundColor = string
});
