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
  rollBtn.innerHTML = `<p class='dice-result'>${RNG(1, 6)}</p>`;
})

flipBtn.addEventListener('click', () => {
  let coin = RNG(1, 2);
  if (coin === 1) {flipBtn.innerHTML = `<p class='coin-result'>Heads</p>`}
  else {flipBtn.innerHTML = `<p class='coin-result'>Tails</p>`}
})

genBtn.addEventListener('click', () => {
  let from = parseInt(document.getElementById('minput').value);
  let to = parseInt(document.getElementById('maxput').value);
  genOutput.textContent = RNG(from, to)
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
