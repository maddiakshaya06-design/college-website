const startButton = document.getElementById("start-button");
const unitsSection = document.getElementById("units");

startButton.addEventListener("click", function () {
  unitsSection.scrollIntoView({
    behavior: "smooth"
  });
});
const explainButton = document.getElementById("explain-button");
const explanation = document.getElementById("program-explanation");

explainButton.addEventListener("click", function () {
  explanation.classList.toggle("show");
});