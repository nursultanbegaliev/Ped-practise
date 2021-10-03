const board = document.querySelector('#board');
const SQUARES_NUMBER = 805;
const colors = ['#edda2f', '#75ed2f', '#2fe4ed', '#2f4fed', '#c42fed', '#ed2f55'];

for(let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));

  square.addEventListener('mouseleave', () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  let color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = '#2c302b';
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  let index = Math.floor(Math.random() * colors.length);
  return colors[index];
}