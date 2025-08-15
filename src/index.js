import "./styles.css";

const $dropdownDiv = document.querySelector(".dropdown");
if ($dropdownDiv) {
  const $dropdownButton = $dropdownDiv.querySelector("button");
  if ($dropdownButton) {
    $dropdownButton.addEventListener("click", function () {
      $dropdownDiv.classList.toggle("active");
    });
  }

  document.addEventListener("click", function (event) {
    if (!$dropdownDiv.contains(event.target)) {
      $dropdownDiv.classList.remove("active");
    }
  });
}
