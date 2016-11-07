// keep track of turn, make a function
function startGame() {
    document.turn = 'X'
    document.play = "Let's Go"
  // set message concat with document.play
    setMessage(document.play + " Cool Cat.");
}


function resetGame () {
  console.log(startGame)
  window.location = window.location
}

function setMessage(msg) {
  document.querySelector('#message').innerText= msg;
}

function nextMove(divCell) {
  if (divCell.innerText === "") {
    divCell.innerText = document.turn;
    switchTurn();
  } else {
    setMessage("That square's been chosen!");
  }
}

function switchTurn() {

  if (checkWinner(document.turn)) {
    setMessage("Congrats " + document.turn + "! You win!");
  } else if (document.turn === "X") {
    document.turn = "0";
    setMessage("Now it's "  + document.turn + "'s turn!");
  } else {
    document.turn = "X";
    setMessage("Now it's "  + document.turn + "'s turn!");
  }
}

function checkWinner(move) {
  var result = false;
  if (checkRow(0,1,2,move) ||
      checkRow(3,4,5,move) ||
      checkRow(6,7,8,move) ||
      checkRow(0,3,6,move) ||
      checkRow(1,4,7,move) ||
      checkRow(2,5,8,move) ||
      checkRow(0,4,8,move) ||
      checkRow(6,4,2,move)) {

      result = true;
      }
  return result;
}

function checkRow(a, b, c, move) {
  var result = false;
  if (getCell(a) === move && getCell(b) === move && getCell(c) === move) {
    result = true;
  }
  return result;
}
  function getCell(number) {
      return document.querySelectorAll(".divCell")[number].innerText;
}
