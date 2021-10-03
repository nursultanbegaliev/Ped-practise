const panel = document.querySelector('.panel');
const button = document.querySelector('.button');

let colors = ['green', 'red', 'blue', 'black', 'rose', 'violet', 'brown', 'acqua'];

button.addEventListener('click', () => {
  panel.style.backgroundColor = getRandomColors();
});

function getRandomColors() {
  let index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
