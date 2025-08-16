import "./styles.css";

const $leftBtn = document.querySelector(".left");
const $rightBtn = document.querySelector(".right");
const $slider = document.querySelector(".wideFrame");
let activeImage = 1; // Tracking image on display

$leftBtn.addEventListener("click", function () {
  // Leftward movement of carousel

  slideLeft();
});

$rightBtn.addEventListener("click", function () {
  // Rightward movement of carousel
  slideRight();
});

function slideLeft() {
  if ($rightBtn.style.display === "none") $rightBtn.style.display = "inline";
  transformX($slider, "500px");
  activeImage -= 1;
  if (activeImage == 1 && $leftBtn.style.display !== "none") {
    $leftBtn.style.display = "none";
  }
}

function slideRight() {
  if ($leftBtn.style.display === "none") $leftBtn.style.display = "inline";
  transformX($slider, "-500px");
  activeImage += 1;
  if (activeImage == 5 && $rightBtn.style.display !== "none") {
    $rightBtn.style.display = "none";
  }
}

function transformX(element, transformation) {
  let currentTransform = element.style.transform || "";
  element.style.transform = `${currentTransform} translateX(${transformation})`;
}
