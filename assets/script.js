'use strict';

const btn = document.querySelector('.button'),
      oneHex = document.querySelector('.oneHex'),
      twoHex = document.querySelector('.twoHex');

function getRandomColor() {
  let randomOne = '#'+ Math.floor(Math.random()*16777215).toString(16);
  let randomTwo = '#'+ Math.floor(Math.random()*16777215).toString(16);
  console.log(randomOne, randomTwo);
  document.body.style.backgroundImage = `linear-gradient(to right,${randomOne}, ${randomTwo})`;
  oneHex.innerHTML = randomOne;
  twoHex.innerHTML = randomTwo;
}

btn.addEventListener("click", getRandomColor);

