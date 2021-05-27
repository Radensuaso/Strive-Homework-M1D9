window.onload = function () {
  createNumbers()
}

// function to create and deploy numbers on the page
const createNumbers = function () {
  const numberContainer = document.querySelector("#number-container")
  for (let i = 1; i <= 76; i++) {
    const newBoardCell = document.createElement("div")
    newBoardCell.innerText = i
    newBoardCell.classList.add("boardCells")
    numberContainer.appendChild(newBoardCell)
  }
}

// get random number function
getRandomNumber = function () {
  const numbersArray = document.querySelectorAll(".boardCells")
  const randomNumber = Math.floor(Math.random() * 76)
  console.log(randomNumber + 1)
  numbersArray[randomNumber].classList.add("highlight")
}
