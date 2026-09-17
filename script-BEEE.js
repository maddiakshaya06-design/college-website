const startButton = document.getElementById("start-button");
const unitsSection = document.getElementById("units");

startButton.addEventListener("click", function () {
  unitsSection.scrollIntoView({
    behavior: "smooth"
  });
});

const answerButton = document.getElementById("answer-button");
const answerBox = document.getElementById("answer-box");

answerButton.addEventListener("click", function () {
  answerBox.classList.toggle("show");
});