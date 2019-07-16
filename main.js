// Creating divs for 16 x 16 grid
const mainContainer = document.createElement("div");
document.body.appendChild(mainContainer);
mainContainer.classList.add("container");

//Grid items
//DIV LOOP TO CREATE ALL 16 x 16 grid
function createGrid() {
  for (var i = 0; i < 256; i++) {
    const gridElement = document.createElement("div");
    mainContainer.appendChild(gridElement);
    gridElement.classList.add("gridItems");
  }
}
// Declared function
createGrid();
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
