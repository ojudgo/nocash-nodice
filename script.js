const rollBtn = document.getElementById('roll-btn');
const flipBtn = document.getElementById('flip-btn');
const genBtn = document.getElementById('generate-btn');

const diceOutput = document.getElementById('dice-output');
const coinOutput = document.getElementById('coin-output');
const genOutput = document.getElementById('gen-output');

const RNG = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
};

rollBtn.addEventListener('click', () => {
  rollBtn.classList.add('rotate'); // start spinning

  setTimeout(() => {
    rollBtn.innerHTML = `<p class='dice-result'>${RNG(1, 6)}</p>`;
    

    rollBtn.classList.remove('rotate'); // reset for next click
  }, 600); // matches animation duration
})

flipBtn.addEventListener('click', () => {
  flipBtn.classList.add('spin'); // start spinning

  setTimeout(() => {
    let coin = RNG(1, 2);
    if (coin === 1) {
      flipBtn.innerHTML = `<p class='coin-result'>Heads</p>`;
    } else {
      flipBtn.innerHTML = `<p class='coin-result'>Tails</p>`;
    }

    flipBtn.classList.remove('spin'); // reset for next click
  }, 600); // matches animation duration
})

genBtn.addEventListener('click', () => {
  let from = parseInt(document.getElementById('minput').value);
  let to = parseInt(document.getElementById('maxput').value);
  genOutput.textContent = RNG(from, to)
})



/* PROTOTYPE

const rollBtn = document.getElementById('roll-btn');
const flipBtn = document.getElementById('flip-btn');
const genBtn = document.getElementById('generate-btn');

const diceOutput = document.getElementById('dice-output');
const coinOutput = document.getElementById('coin-output');
const genOutput = document.getElementById('gen-output');



// my RNG function
const RNG = (min, max) => {
  return Math.floor(Math.random() * max) + min
};

const RNG = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
};

rollBtn.addEventListener('click', () => {
  diceOutput.textContent = RNG(1, 6);
})

flipBtn.addEventListener('click', () => {
  let coin = RNG(1, 2);
  if (coin === 1) {coinOutput.textContent = 'Heads'}
  else {coinOutput.textContent = 'Tails'}
})

genBtn.addEventListener('click', () => {
  let from = parseInt(document.getElementById('minput').value);
  let to = parseInt(document.getElementById('maxput').value);
  genOutput.textContent = RNG(from, to)
})

*/

