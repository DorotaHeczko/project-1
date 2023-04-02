/* eslint-disable quotes */
const getBtn = document.querySelector("button");
let number = 1;
const addEl = function () {
  const newBox = document.createElement("div");
  newBox.classList.add("box");
  newBox.textContent = number;
  number++;

  if (number % 5 == 0) {
    newBox.classList.add("circle");
  }
  document.body.appendChild(newBox);
};

getBtn.addEventListener("click", addEl); 
