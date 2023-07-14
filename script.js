const borad = document.getElementById("borad");
let i;
for (i = 0; i < 9; i++) {
  let cellBorad = document.createElement("div");
  cellBorad.classList.add(`cell`);
  cellBorad.classList.add(`cell-${i}`);
  cellBorad.id = `${i}`;
  borad.appendChild(cellBorad);
}

let newCounter = 0;
let tac;
let resultX = "cross ";
let resultC = "circle ";
let coross = "cross";
let circle = "circle";

let turnW = "circle";
const list = borad.addEventListener("click", chose);
let c = document.getElementsByClassName(`cell-${newCounter}`);
let turn = document.querySelector(".turn");
turn.innerHTML = `first turn: ${circle}`;
function chose(c) {
  const circle = document.createElement("div");
  circle.innerText = "circle";
  circle.classList.add("circle");

  const x = document.createElement("div");
  x.innerText = "cross";
  x.classList.add("tac");
  if (newCounter % 2 == 0) {
    c.target.append(circle);
    turn.innerHTML = `turn: ${coross}`;
    circle.addEventListener("selectstart", function (event) {
      event.preventDefault();
    });
  } else if (!newCounter % 2 == 0) {
    c.target.append(x);
    turn.innerHTML = `turn: ${turnW}`;
    x.addEventListener("selectstart", function (event) {
      event.preventDefault();
    });
  }

  if (
    (document.getElementById(`0`).innerText == "cross" &&
      document.getElementById(`1`).innerText == "cross" &&
      document.getElementById(`2`).innerText == "cross") ||
    (document.getElementById(`3`).innerText == "cross" &&
      document.getElementById(`4`).innerText == "cross" &&
      document.getElementById(`5`).innerText == "cross") ||
    (document.getElementById(`6`).innerText == "cross" &&
      document.getElementById(`7`).innerText == "cross" &&
      document.getElementById(`8`).innerText == "cross") ||
    (document.getElementById(`1`).innerText == "cross" &&
      document.getElementById(`4`).innerText == "cross" &&
      document.getElementById(`7`).innerText == "cross") ||
    (document.getElementById(`2`).innerText == "cross" &&
      document.getElementById(`5`).innerText == "cross" &&
      document.getElementById(`8`).innerText == "cross") ||
    (document.getElementById(`0`).innerText == "cross" &&
      document.getElementById(`5`).innerText == "cross" &&
      document.getElementById(`8`).innerText == "cross") ||
    (document.getElementById(`2`).innerText == "cross" &&
      document.getElementById(`4`).innerText == "cross" &&
      document.getElementById(`6`).innerText == "cross")
  ) {
    turn.innerHTML = `the winner is: ${resultX}`;
    for (let k = 0; k < 9; k++) {
      let removex = document.getElementById(`${k}`);
      removex.parentNode.removeChild(removex);
    }
    function moveBox() {
      const box1 = document.getElementById("animate");
      const src = document.querySelector("img");
      src["src"] = "./images/X.jpg";

      let left = 0;
      let direction = "top-right";
      let id = setInterval(frame, 5);

      function frame() {
        switch (direction) {
          case "top-right":
            left += 5;
            box1.style.left = left + "px";
            if (left == 1400) {
              clearInterval(id);
            }
        }
      }
    }
    moveBox();
  } else if (
    (document.getElementById(`0`).innerText == "circle" &&
      document.getElementById(`1`).innerText == "circle" &&
      document.getElementById(`2`).innerText == "circle") ||
    (document.getElementById(`3`).innerText == "circle" &&
      document.getElementById(`4`).innerText == "circle" &&
      document.getElementById(`5`).innerText == "circle") ||
    (document.getElementById(`6`).innerText == "circle" &&
      document.getElementById(`7`).innerText == "circle" &&
      document.getElementById(`8`).innerText == "circle") ||
    (document.getElementById(`1`).innerText == "circle" &&
      document.getElementById(`4`).innerText == "circle" &&
      document.getElementById(`7`).innerText == "circle") ||
    (document.getElementById(`2`).innerText == "circle" &&
      document.getElementById(`5`).innerText == "circle" &&
      document.getElementById(`8`).innerText == "circle") ||
    (document.getElementById(`0`).innerText == "circle" &&
      document.getElementById(`5`).innerText == "circle" &&
      document.getElementById(`8`).innerText == "circle") ||
    (document.getElementById(`2`).innerText == "circle" &&
      document.getElementById(`4`).innerText == "circle" &&
      document.getElementById(`6`).innerText == "circle")
  ) {
    turn.innerHTML = `the winner is: ${resultC}`;

    for (let k = 0; k < 9; k++) {
      let removex = document.getElementById(`${k}`);
      removex.parentNode.removeChild(removex);
    }

    function moveBox() {
      const box1 = document.getElementById("animate");
      const src = document.querySelector("img");
      src["src"] = "./images/o.webp";
      let top = 0;
      let left = 0;
      let direction = "top-right";
      let id = setInterval(frame, 5);

      function frame() {
        switch (direction) {
          case "top-right":
            left += 5;
            box1.style.left = left + "px";
            if (left == 1400) {
              clearInterval(id);
            }
        }
      }
    }
    moveBox();
  }
  newCounter++;
  return;
}
