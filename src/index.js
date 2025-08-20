import "./styles.css";

const img = document.querySelector("img");

fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=9DJ3r9jvTt5JDGWaee7k3T1Hg2SO8xtk&s=Test",
  {
    mode: "cors",
  },
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    img.src = response.data.images.original.url;
  });
