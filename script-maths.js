const startButton = document.getElementById("start-button");
const unitsSection = document.getElementById("units");

startButton.addEventListener("click", function () {
  unitsSection.scrollIntoView({
    behavior: "smooth"
  });
});

const formulaButton = document.getElementById("formula-button");
const formulaBox = document.getElementById("formula-box");

formulaButton.addEventListener("click", function () {
  formulaBox.classList.toggle("show");
});