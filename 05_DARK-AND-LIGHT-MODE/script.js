const fullDarkode = document.querySelector("#darkMode");
const body = document.querySelector("body");
const main = document.querySelector("main");
const containerDarkMode = document.querySelector("#container-darkMode");
const container = document.querySelector(".inner-container");



fullDarkode.addEventListener("change", () => {
  if (fullDarkode.checked) {
    body.classList.add("dark");
    console.log("dark classlist add");
  } else {
    body.classList.remove("dark");
    console.log("dark classlist remove");
  }
  containerDarkMode.checked = fullDarkode.checked;
  changeCantainedDarkMode();
});

function changeCantainedDarkMode() {
  if (containerDarkMode.checked) {
    container.classList.add("dark");
    console.log("dark classlist add");
  } else {
    container.classList.remove("dark");
    console.log("dark classlist remove");
  }
}

containerDarkMode.addEventListener("change", () => {
  changeCantainedDarkMode();
});





