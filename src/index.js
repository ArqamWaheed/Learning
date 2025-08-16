import "./styles.css";

const $leftBtn = document.querySelector(".left");
const $rightBtn = document.querySelector(".right");
const $slider = document.querySelector(".wideFrame");
let activeImage = "1"; // Tracking image on display

$leftBtn.addEventListener("click", function () {
  // Leftward movement of carousel
  slideLeft();
});

$rightBtn.addEventListener("click", function () {
  // Rightward movement of carousel
  slideRight();
});

function slideLeft() {
  transformX($slider, "500px");
  activeImage += 1;
}

function slideRight() {
  transformX($slider, "-500px");
  activeImage += 1;
}

function transformX(element, transformation) {
  let currentTransform = element.style.transform || "";
  element.style.transform = `${currentTransform} translateX(${transformation})`;
}
