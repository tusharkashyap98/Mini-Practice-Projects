const btn = document.querySelector("#btn");
const newBtn = document.querySelector("#newBtn");
let para = document.querySelector("#para");
const body = document.querySelector("body");

// function getRandomColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }

//   return color;
// }


function changeBackgroundColor() {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
}

btn.addEventListener("click", changeBackgroundColor);

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  body.style.backgroundColor = color;
  return color;
}

btn.addEventListener("click", () => {
  getRandomColor();
});



// newBtn.addEventListener("click", () => {
//   for (let i = 1; i <= 10; i++) {
//     setTimeout(() => {
//       para.innerHTML = i;
//     }, i * 500);
//   }

//   for (let i = 10; i >= 0; i--) {
//     setTimeout(() => {
//       para.innerHTML = i;
//     }, (21 - i) * 500);
//   }
// });



