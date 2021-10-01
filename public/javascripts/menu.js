const hamburger = document.getElementById("hamburger");
const pullDown = document.getElementById("pull-down");

hamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
  pullDown.classList.contains("invisible")
    ? pullDown.classList.remove("invisible")
    : pullDown.classList.add("invisible");
}
