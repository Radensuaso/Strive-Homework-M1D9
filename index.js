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

// array of unique numbers
const arrayOfUniqueNumbers = [] //With this we will be able to randomize the numbers just once
for (let i = 0; i < 76; i++) {
  arrayOfUniqueNumbers.push(i)
}

// get random number function

getRandomNumber = function () {
  const cellsArray = document.querySelectorAll(".boardCells") // select array of boardCells divs
  const randomIndex = Math.floor(Math.random() * arrayOfUniqueNumbers.length) //Select random Index to randomize a number in the unique numbers array
  const randomNumber = arrayOfUniqueNumbers[randomIndex] // random number of the array of arrayOfUniqueNumbers, randomly selected by randomIndex

  if (arrayOfUniqueNumbers.length === 0) {
    alert("No more numbers. Please refresh the page to start again") // If there's no more numbers alert the user to refresh the page
  } else {
    arrayOfUniqueNumbers.splice(randomIndex, 1)
    cellsArray[randomNumber].classList.add("highlight")
    document.querySelector("#current-number").innerText = randomNumber + 1
  }
}
