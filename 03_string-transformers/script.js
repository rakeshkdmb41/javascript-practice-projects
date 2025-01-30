const userInput = document.querySelector('.user-input')
const lowerCase = document.querySelector('.lower-case')
const upperCase = document.querySelector('.upper-case')
const camelCase = document.querySelector('.camel-case')
const pascalCase = document.querySelector('.pascal-case')
const snakeCase = document.querySelector('.snake-case')
const kebabCase = document.querySelector('.kebab-case')
const trim = document.querySelector('.trim')

// const res = document.querySelectorAll(".result-container > div > label")

userInput.addEventListener('input', (e) => {
  lowerCase.innerText = e.target.value.toLocaleLowerCase()
  upperCase.innerText = e.target.value.toUpperCase()
  camelCase.innerText = e.target.value.split(" ").join("") //not happened
  pascalCase.innerText = e.target.value.split(" ").join("") //not happened
  snakeCase.innerText = e.target.value.split(" ").join("_")
  kebabCase.innerText = e.target.value.split(" ").join("-")
  trim.innerText = e.target.value.split(" ").join("")
})
