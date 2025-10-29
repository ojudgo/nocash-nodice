const rollBtn = document.getElementById('roll-btn');
const flipBtn = document.getElementById('flip-btn');
const genBtn = document.getElementById('generate-btn');
const pickBtn = document.getElementById('pick-btn');

const diceOutput = document.getElementById('dice-output');
const coinOutput = document.getElementById('coin-output');
const genOutput = document.getElementById('gen-output');
const cardOutput = document.getElementById('card-output');
const imgOutput = document.getElementById('img-output');

const RNG = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
};

function showDiceFace(num) {
  // Create 9 pip positions
  const diceHTML = Array.from({ length: 9 }, (_, i) => `<div class="pip" id="p${i + 1}"></div>`).join('');
  rollBtn.innerHTML = `<div class="dice">${diceHTML}</div>`;

  // Define which pips are visible for each face
  const faces = {
    1: [5],
    2: [1, 9],
    3: [1, 5, 9],
    4: [1, 3, 7, 9],
    5: [1, 3, 5, 7, 9],
    6: [1, 3, 4, 6, 7, 9]
  };

  faces[num].forEach(i => document.getElementById(`p${i}`).classList.add('show'));
}

rollBtn.addEventListener('click', () => {
  rollBtn.classList.add('rotate'); // start spinning

  setTimeout(() => {
    const result = RNG(1, 6);
    showDiceFace(result);
    rollBtn.classList.remove('rotate'); // reset for next click
  }, 600); // matches animation duration
});

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

// CARD CODE



let deckArray = 
[
  {place: 0,name: 'Joker',connector: '(pick',suit:'again)', source: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Joker_black_02.svg', }, 
  
  {place: 1,name: 'Ace',connector: 'of', suit: 'Clubs', source: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/English_pattern_ace_of_clubs.svg', }, 
  
  {place: 2,name: 2,connector: 'of', suit: 'Clubs', source: 'https://upload.wikimedia.org/wikipedia/commons/3/30/English_pattern_2_of_clubs.svg', }, 
  
  {place: 3,name: 3,connector: 'of', suit: 'Clubs', source: 'https://upload.wikimedia.org/wikipedia/commons/1/14/English_pattern_3_of_clubs.svg', }, 
  
  {place: 4,name: 4,connector: 'of', suit: 'Clubs', source: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/English_pattern_4_of_clubs.svg', }, 
  
  {place: 5,name: 5,connector: 'of', suit: 'Clubs', source: 'https://upload.wikimedia.org/wikipedia/commons/7/74/English_pattern_5_of_clubs.svg', }, 
  
  {place: 6,name: 6,connector: 'of', suit: 'Clubs', source: 'https://upload.wikimedia.org/wikipedia/commons/0/02/English_pattern_6_of_clubs.svg', }, 
  
  {place: 7,name: 7,connector: 'of', suit: 'Clubs', source: 'https://upload.wikimedia.org/wikipedia/commons/6/60/English_pattern_7_of_clubs.svg', }, 
  
  {place: 8,name: 8,connector: 'of', suit: 'Clubs', source: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/English_pattern_8_of_clubs.svg', }, 
  
  {place: 9,name: 9,connector: 'of', suit: 'Clubs', source: 'https://upload.wikimedia.org/wikipedia/commons/1/14/English_pattern_9_of_clubs.svg', }, 
  
  {place: 10,name: 10,connector: 'of', suit: 'Clubs', source: 'https://upload.wikimedia.org/wikipedia/commons/4/48/English_pattern_10_of_clubs.svg', }, 
  
  {place: 11,name: 'Ace',connector: 'of', suit: 'Diamonds', source: 'https://upload.wikimedia.org/wikipedia/commons/0/00/English_pattern_ace_of_diamonds.svg', }, 
  
  {place: 12,name: 2,connector: 'of', suit: 'Diamonds', source: 'https://upload.wikimedia.org/wikipedia/commons/9/99/English_pattern_2_of_diamonds.svg', }, 
  
  {place: 13,name: 3,connector: 'of', suit: 'Diamonds', source: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/English_pattern_3_of_diamonds.svg', }, 
  
  {place: 14,name: 4,connector: 'of', suit: 'Diamonds', source: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/English_pattern_4_of_diamonds.svg', }, 
  
  {place: 15,name: 5,connector: 'of', suit: 'Diamonds', source: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/English_pattern_5_of_diamonds.svg', }, 
  
  {place: 16,name: 6,connector: 'of', suit: 'Diamonds', source: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/English_pattern_6_of_diamonds.svg', }, 
  
  {place: 17,name: 7,connector: 'of', suit: 'Diamonds', source: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/English_pattern_7_of_diamonds.svg', },
  
  {place: 18,name: 8,connector: 'of', suit: 'Diamonds', source: 'https://upload.wikimedia.org/wikipedia/commons/1/18/English_pattern_8_of_diamonds.svg', }, 
  
  {place: 19,name: 9,connector: 'of', suit: 'Diamonds', source: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/English_pattern_9_of_diamonds.svg', }, 
  
  {place: 20,name: 10,connector: 'of', suit: 'Diamonds', source: 'https://upload.wikimedia.org/wikipedia/commons/d/da/English_pattern_10_of_diamonds.svg', }, 
  
  {place: 21,name: 'Ace',connector: 'of', suit: 'Hearts', source: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/English_pattern_ace_of_hearts.svg', }, 
  
  {place: 22,name: 2,connector: 'of', suit: 'Hearts', source: 'https://upload.wikimedia.org/wikipedia/commons/2/26/English_pattern_2_of_hearts.svg', }, 
  
  {place: 23,name: 3,connector: 'of', suit: 'Hearts', source: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/English_pattern_3_of_hearts.svg', }, 
  
  {place: 24,name: 4,connector: 'of', suit: 'Hearts', source: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/English_pattern_4_of_hearts.svg', }, 
  
  {place: 25,name: 5,connector: 'of', suit: 'Hearts', source: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/English_pattern_5_of_hearts.svg', }, 
  
  {place: 26,name: 6,connector: 'of', suit: 'Hearts', source: 'https://upload.wikimedia.org/wikipedia/commons/d/da/English_pattern_6_of_hearts.svg', }, 
  
  {place: 27,name: 7,connector: 'of', suit: 'Hearts', source: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/English_pattern_7_of_hearts.svg', }, 
  
  {place: 28,name: 8,connector: 'of', suit: 'Hearts', source: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/English_pattern_8_of_hearts.svg', }, 
  
  {place: 29,name: 9,connector: 'of', suit: 'Hearts', source: 'https://upload.wikimedia.org/wikipedia/commons/2/22/English_pattern_9_of_hearts.svg', }, 
  
  {place: 30,name: 10,connector: 'of', suit: 'Hearts', source: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/English_pattern_10_of_hearts.svg', }, 
  
  {place: 31,name: 'Ace',connector: 'of', suit: 'Spades', source: 'https://upload.wikimedia.org/wikipedia/commons/1/19/English_pattern_ace_of_spades.svg', }, 
  
  {place: 32,name: 2,connector: 'of', suit: 'Spades', source: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/English_pattern_2_of_spades.svg', }, 
  
  {place: 33,name: 3,connector: 'of', suit: 'Spades', source: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/English_pattern_3_of_spades.svg', }, 
  
  {place: 34,name: 4,connector: 'of', suit: 'Spades', source: 'https://upload.wikimedia.org/wikipedia/commons/3/34/English_pattern_4_of_spades.svg', }, 
  
  {place: 35,name: 5,connector: 'of', suit: 'Spades', source: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/English_pattern_5_of_spades.svg', }, 
  
  {place: 36,name: 6,connector: 'of', suit: 'Spades', source: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/English_pattern_6_of_spades.svg', }, 
  
  {place: 37,name: 7,connector: 'of', suit: 'Spades', source: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/English_pattern_7_of_spades.svg', }, 
  
  {place: 38,name: 8,connector: 'of', suit: 'Spades', source: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/English_pattern_8_of_spades.svg', }, 
  
  {place: 39,name: 9,connector: 'of', suit: 'Spades', source: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/English_pattern_9_of_spades.svg', }, 
  
  {place: 40,name: 10,connector: 'of', suit: 'Spades', source: 'https://upload.wikimedia.org/wikipedia/commons/d/da/English_pattern_10_of_spades.svg', }, 
  
  {place: 41,name: 'Jack',connector: 'of', suit: 'Clubs', source: 'https://upload.wikimedia.org/wikipedia/commons/8/80/English_pattern_jack_of_clubs.svg', },
  
  {place: 42,name: 'Queen',connector: 'of', suit: 'Clubs', source: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/English_pattern_queen_of_clubs.svg', }, 
  
  {place: 43,name: 'King',connector: 'of', suit: 'Clubs', source: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/English_pattern_king_of_clubs.svg', }, 
  
  {place: 44,name: 'Jack',connector: 'of', suit: 'Diamonds', source: 'https://upload.wikimedia.org/wikipedia/commons/1/16/English_pattern_jack_of_diamonds.svg', }, 
  
  {place: 45,name: 'Queen',connector: 'of', suit: 'Diamonds', source: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/English_pattern_queen_of_diamonds.svg', }, 
  
  {place: 46,name: 'King',connector: 'of', suit: 'Diamonds', source: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/English_pattern_king_of_diamonds.svg', }, 
  
  {place: 47,name: 'Jack',connector: 'of', suit: 'Hearts', source: 'https://upload.wikimedia.org/wikipedia/commons/5/56/English_pattern_jack_of_hearts.svg', }, 
  
  {place: 48,name: 'Queen',connector: 'of', suit: 'Hearts', source: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/English_pattern_queen_of_hearts.svg', }, 
  
  {place: 49,name: 'King',connector: 'of', suit: 'Hearts', source: 'https://upload.wikimedia.org/wikipedia/commons/1/14/English_pattern_king_of_hearts.svg', }, 
  
  {place: 50,name: 'Jack',connector: 'of', suit: 'Spades', source: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/English_pattern_jack_of_spades.svg', }, 
  
  {place: 51,name: 'Queen',connector: 'of', suit: 'Spades', source: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/English_pattern_queen_of_spades.svg', }, 
  
  {place: 52,name: 'King',connector: 'of', suit: 'Spades', source: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/English_pattern_king_of_spades.svg', }, 
  
  {place: 53,name: 'Joker',connector: '(pick',suit:'again)', source: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Joker_red_02.svg', }]


//END OF DECK ARRAY



let copiedDeck = [...deckArray]

let count = copiedDeck.length;

function pickACard() {  
  
  
  if (count != 0) {pickBtn.innerText = 'Pick a card'};
  
  let result = RNG(0, count - 1);
  
 
  
  cardOutput.innerText = `${copiedDeck[result].name} ${copiedDeck[result].connector} ${copiedDeck[result].suit} `
  imgOutput.innerHTML = `  
  <img src=${copiedDeck[result].source} alt='${copiedDeck[result].name} ${copiedDeck[result].connector} ${copiedDeck[result].suit}'>
  `

copiedDeck.splice(result, 1);  
count = copiedDeck.length;  


  
if (count == 0) {
  pickBtn.innerText = 'Deal again';
  copiedDeck = [...deckArray]
  count = copiedDeck.length;
}  
  
}


pickBtn.addEventListener('click', pickACard)



