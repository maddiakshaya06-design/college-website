const startButton = document.getElementById("start-button");
const unitsSection = document.getElementById("units");

startButton.addEventListener("click", function () {
  unitsSection.scrollIntoView({
    behavior: "smooth"
  });
});

const experimentButton = document.getElementById("experiment-button");
const experimentSteps = document.getElementById("experiment-steps");

experimentButton.addEventListener("click", function () {
  experimentSteps.classList.toggle("show");
});