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

// FUNCTION TO CREATE THE GRID AND COLOR WITH THE CLICK
function createGrid(numCells, eleContainer) {
  eleContainer.innerHTML = "";
  for (let i = 1; i <= numCells; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.innerHTML = [i];
    eleContainer.append(cell);
    // ADD COLOR WITH THE CLICK
    cell.addEventListener("click", function () {
      console.log(cell);
      cell.classList.toggle("active");
    });
  }
}

// CREARE ARRAY VUOTO PER POI INSERIRE LE BOMBE GENERATE DALLA FUNZIONE
let bomb = [];
console.log("bomb before cicle", bomb);

// GENERARE 16 NUMERI CHE SARANNO LE BOMBE
while (bomb.length !== 16) {
  const bombIndex = generateBomb(1, 100);
  if (!bomb.includes(bombIndex)) {
    bomb.push(bombIndex);
  }
}
console.log("bomb", bomb);

// FUNZIONE PER CREARE UN NUMERO RANDOM
function generateBomb(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
