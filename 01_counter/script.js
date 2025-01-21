const counter = document.querySelector('.counter')
const decrement = document.querySelector('.decrement')
const increment = document.querySelector('.increment')
const changeBy = document.querySelector('#changeBy')
const reset = document.querySelector('.reset')

let number = 0
let reflectNumber = 1
changeBy.value = reflectNumber

counter.innerText = number

decrement.addEventListener('click', () => {
  number = number - reflectNumber
  counter.innerText = number
})

increment.addEventListener('click', () => {
  number = number + reflectNumber
  counter.innerText = number
})

reset.addEventListener('click', () => {
  number = 0
  reflectNumber = 1
  changeBy.value = 1
  counter.innerText = number
})

changeBy.addEventListener('blur', (e) => {
  reflectNumber = parseInt(changeBy.value)
})