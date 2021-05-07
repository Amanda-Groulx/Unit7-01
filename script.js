//  Connect "Guess" button to "random function"
document.getElementById('button').addEventListener('click', randomizer)
let randomNumber = 0
let UserGuess = 0

function randomizer () {
  //  get number typed in by user and convert to an integer
  const = document.getElementById('input').value
  const = parseInt(userGuess)

  //  generate random number between 1 and 6
  randomNumber = (Math.random() * 6) + 1
  randomNumber = parseInt(randomNumber)

  //  compare user's guess with random number
  if (UserGuess === randomNumber) {
    document.getElementById('answer').innerHTML = 'You win!'
  }
}
