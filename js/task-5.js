function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const change = document.querySelector(".change-color");
const color = document.querySelector(".color");

change.addEventListener("click", () => {
  const newChange = getRandomHexColor();
  document.body.style.backgroundColor = newChange;
  color.textContent = newChange;
})


