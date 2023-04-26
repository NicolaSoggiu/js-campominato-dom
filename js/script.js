// DECLARE THE VARIABLES
const eleGrid = document.querySelector(".grid");
const btn = document.querySelector(".btn");
const easy = document.querySelector("#easy");
const medium = document.querySelector("#medium");
const hard = document.querySelector("#hard");

// BUTTON TO GENERATE GRID ACCORDING TO DIFFICULTY
btn.addEventListener("click", function () {
  const chooseDifficulty = document.querySelector("#btnDifficulty").value;
  // EASY
  if (chooseDifficulty === "easy") {
    createGrid(100, eleGrid);
    // MEDIUM
  } else if (chooseDifficulty === "medium") {
    createGrid(81, eleGrid);
    const cell = document.querySelectorAll(".cell");
    cell.forEach((cell) => {
      cell.style.width = "calc(100% / 9)";
      cell.style.height = "calc(100% / 9)";
    });
    // HARD
  } else if (chooseDifficulty === "hard") {
    createGrid(49, eleGrid);
    const cell = document.querySelectorAll(".cell");
    cell.forEach((cell) => {
      cell.style.width = "calc(100% / 7)";
      cell.style.height = "calc(100% / 7)";
    });
  }
});

// ADD EMPTY ARRAY, AND ADD IN THE ARRAY THE BOMB GENERATE WITH THE FUNCTION
let bombPosition = [];
console.log("bombPosition before cicle", bombPosition);

// GENERATE 16 BOMB
while (bombPosition.length !== 16) {
  const bombIndex = generateBomb(1, 100);
  if (!bombPosition.includes(bombIndex)) {
    bombPosition.push(bombIndex);
  }
}
console.log("bombPosition after cicle", bombPosition);

// FUNCTION TO CREATE THE GRID AND COLOR WITH THE CLICK
function createGrid(numCells, eleContainer) {
  eleContainer.innerHTML = "";
  let gameOver = true;
  let score = 0;
  for (let i = 1; i <= numCells; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.innerHTML = [i];
    eleContainer.append(cell);
    // ADD COLOR WITH THE CLICK
    cell.addEventListener("click", function () {
      console.log(cell);
      if (!gameOver) {
        return;
      }
      cell.classList.toggle("active");
      // CHECK IF CELL IS A BOMB AND STOP GAME IF FIND A BOMB
      if (bombPosition.includes(i)) {
        if (cell.classList.contains("bomb")) {
          return;
        }
        cell.classList.remove("active");
        cell.classList.toggle("bomb");
        gameOver = false;
        console.log("Game Over");
      } else {
        score++;
        document.getElementById("score").innerHTML =
          "Il tuo punteggio è : " + score;

        console.log("score", score);
      }
    });
  }
}

// fUNCTION TO CREATE A RANDOM NUMBER
function generateBomb(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
