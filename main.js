// Creating divs for 16 x 16 grid
/*

document.body.appendChild(mainContainer);
mainContainer.classList.add("container");

//Grid items
*/
// Create Grid
//
const createGrid = () => {
  const markup = `
      <div class="container" id="container" style="display: grid;
                                                  border: 5px black solid; 
                                                  margin-left: auto;
                                                  margin-right: auto;
                                                  margin-top: 8vh;
                                                  height: 60vh; 
                                                  width: 60vh">
      </div> `;
  document.body.innerHTML += markup;
};
createGrid();
const fillGrid = (numrows, numcolumns) => {
  const container = document.getElementById("container");
  container.style.gridTemplateColumns = `repeat(${numcolumns}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${numrows}, 1fr)`;
  let i = 0;

  let k = 0;
  let blockCount = 0;
  for (i = 0; i < numrows; i++) {
    for (j = 0; j < numcolumns; j++) {
      let markup = ` <div id="block ${blockCount}"
                      onmouseover="flipColor(this)"
                      style="grid-row:${i} /;
                      grid-column: ${j} /;
                      color:blue;
                      background-color:blue;">${"1"}</div>`;
      container.innerHTML += markup;
      blockCount++;
    }
  }
};
fillGrid(16, 16);
function flipColor(thing) {
  thing.style.backgroundColor = "yellow";
  thing.style.color = "yellow";
}

function resetGrid() {
  const element = document.getElementById("container");
  const numberOfChildren = element.childElementCount;
  const numRows = Math.sqrt(numberOfChildren);
  const numCols = numRows;
  let i = 0;
  let k = 0;
  let blockCount = 0;
  for (i = 0; i < numRows; i++) {
    for (j = 0; j < numCols; j++) {
      let currBlock = document.getElementById(`block ${blockCount}`);
      currBlock.style.color = "blue";
      currBlock.style.backgroundColor = "blue";
      blockCount++;
    }
  }
}

function resizeGrid() {
  let resize = prompt(
    "Enter a value of 1 and 20. NOTE: this will clear the canvas!"
  );
  if (!resize) {
    return;
  }
  while (resize > 20) {
    resize = prompt("That value is too high, pick a lower number.");
  }
  var myNode = document.getElementById("container");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }

  fillGrid(resize, resize);
}

/*
//DIV LOOP TO CREATE ALL 16 x 16 grid
function getOriginalGrid() {
  for (var i = 0; i < 256; i++) {
    const gridElement = document.createElement("div");
    mainContainer.appendChild(gridElement);
    gridElement.classList.add("gridItems");
  }
}

// Declared function
const grid = getOriginalGrid();
// create a dom of each class
const gridDOM = document.querySelectorAll(".gridItems");
// Create a foreach function for the gridDOM
gridDOM.forEach(gridItems => {
  const bgColor = function() {
    gridItems.style.backgroundColor = randomColor();
  };
  gridItems.addEventListener("mouseover", bgColor);
  const removeEvent = function() {
    gridItems.removeEventListener("mouseover", bgColor);
  };
  gridItems.addEventListener("mouseover", removeEvent);
});

// Random Color function
function randomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 16)];
  }
  return color;
}
// Creating a button for grid
const btn = document.getElementById("clickMe");
btn.addEventListener("click", resetGrid);
btn.addEventListener("click", customizeGrid);
function resetGrid() {
  let child = mainContainer.lastElementChild;
  while (child) {
    mainContainer.removeChild(child);
    child = mainContainer.lastElementChild;
  }
}

function customizeGrid() {
  const num = prompt("how many squares per side?");
  var input = parseInt(num);
  for (let i = 0; i < input; i++) {
    const element = document.createElement("div");
    mainContainer.appendChild(element);
    element.classList.add("gridItems");
  }
}
*/
