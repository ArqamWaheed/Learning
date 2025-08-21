import "./styles.css";

const img = document.querySelector("img");
async function functionAsyncRyan() {
  const response = await fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=9DJ3r9jvTt5JDGWaee7k3T1Hg2SO8xtk&s=Test",
    { mode: "cors" },
  );
  const data = await response.json();
  img.src = data.data.images.original.url;
}

functionAsyncRyan();

// .then(function (response) {
// return response.json();
// })
// .then(function (response) {
// img.src = response.data.images.original.url;
// });
