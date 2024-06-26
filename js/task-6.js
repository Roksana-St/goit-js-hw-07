function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const create = controls.querySelector("button[data-create]");
const destroy = controls.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  const element = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.classList.add("box");
    element.push(div);
    size += 10;
  }

  boxes.innerHTML = "";
  boxes.append(...element);
}

function clean () {
  boxes.innerHTML = "";
}

create.addEventListener("click", () => {
  const amount = parseInt(input.value.trim(), 10);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  } else {
    alert('Please enter a number between 1 and 100.');

  }
});

destroy.addEventListener("click", clean);



