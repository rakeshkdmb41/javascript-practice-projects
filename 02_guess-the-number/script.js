const submit = document.querySelector('.submit')
const number = document.querySelector('#number')
const startGame = document.querySelector('.start-game')
const messageBox = document.querySelector('.message-box')
const yourGuesses = document.querySelector('.your-guesses')

let randomNumber = Math.floor(Math.random() * 101)
if(randomNumber) startGame.disabled = true
let guessesNumber = ''
number.focus()

startGame.addEventListener('click', () => {
  randomNumber = Math.floor(Math.random() * 101)
  yourGuesses.innerText = ''
  messageBox.innerText = ''
  submit.disabled = false
  number.disabled = false
  startGame.disabled = true
  number.focus()
})

submit.addEventListener('click', () => {
  if(guessesNumber.length < 1) 
    guessesNumber = 'Your guesses: ' + number.value
  else 
    guessesNumber += ', ' + number.value

  yourGuesses.innerText = guessesNumber

  if(parseInt(number.value) > randomNumber)
    messageBox.innerText = 'Too high!'
  else if(parseInt(number.value) < randomNumber)
    messageBox.innerText = 'Too low!'
  else {
    messageBox.innerText = 'You got it! Congrats'
    randomNumber = ''
    startGame.disabled = false
    submit.disabled = true
    number.disabled = true
  }

  number.value = ''
  number.focus()

})

// function guessingNumber() {
//   if(guessesNumber.length < 1) {
//     guessesNumber = 'Your guesses: ' + number.value
//   } else {
//     guessesNumber += ', ' + number.value
//   }
//   yourGuesses.innerText = guessesNumber
//   if(parseInt(number.value) > randomNumber) {
//     messageBox.innerText = 'Too high!'
//   } else if(parseInt(number.value) < randomNumber) {
//     messageBox.innerText = 'Too low!'
//   } else {
//     messageBox.innerText = 'You got it! Congrats'
//     randomNumber = ''
//     startGame.disabled = false
//     submit.disabled = true
//     number.disabled = true
//   }
//   number.value = ''
//   number.focus()
// }