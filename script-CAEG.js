const startButton = document.getElementById("start-button");
const unitsSection = document.getElementById("units");

startButton.addEventListener("click", function () {
  unitsSection.scrollIntoView({
    behavior: "smooth"
  });
});

const stepsButton = document.getElementById("steps-button");
const stepsBox = document.getElementById("steps-box");

stepsButton.addEventListener("click", function () {
  stepsBox.classList.toggle("show");
});