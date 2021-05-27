window.onload = function () {
  createNumbers()
}

// function to create and deploy numbers on the page
const createNumbers = function () {
  const numberContainer = document.querySelector("#number-container")
  for (let i = 1; i <= 76; i++) {
    const newNumber = document.createElement("div")
    newNumber.innerText = i
    newNumber.classList.add("numbers")
    numberContainer.appendChild(newNumber)
  }
}

// get random number function
getRandomNumber = function () {
  const randomNumber = Math.ceil(Math.random() * 76)
  const selectedDiv = document.querySelectorAll(".numbers")[randomNumber]
  selectedDiv.classList.add("highlight")
}
