//document.addEventListener('DOMContentLoaded', () => {
let cardArray =[
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name:'hotdog',
    img:'images/hotdog.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  }
]

cardArray.sort(() => 0.5 - Math.random())



const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result')
const startReset = document.querySelector('.sR')
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];


startReset.addEventListener('click', createBoard)

  function createBoard() {

      for (let i = 0; i < cardArray.length; i++){
        card = document.createElement('img')
        card.setAttribute('src', './images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click',flipcard)
        grid.appendChild(card)

      }

}

//check for marks
function checkForMatch(){
  var cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]
  if (cardsChosen[0] === cardsChosen[1]){
    if(cardsChosenId[0] != cardsChosenId[1]){
      alert('You found a match')
      cards[optionOneId].setAttribute('src','images/white.png')
      cards[optionTwoId].setAttribute('src','images/white.png')
      cards[optionOneId].removeEventListener('click',flipcard)
      cards[optionTwoId].removeEventListener('click',flipcard)
      cardsWon.push(cardsChosen)
    }else{
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src','images/blank.png')
        alert('Sorry, try again')
    }
  }else{
    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoId].setAttribute('src','images/blank.png')
    alert('Sorry, try again')
  }
  cardsChosen = []
  cardsChosenId = []
  resultDisplay.textContent = cardsWon.length
  if (cardsWon.length === cardArray.length/2){
    resultDisplay.textContent = 'Congratulations! You collect all of them.'
  }
}
//flipcard
function flipcard(){
  var cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  console.log(cardsChosen, cardsChosenId)
  if (cardsChosen.length == 2){
    setTimeout(checkForMatch, 100)
  }
}
