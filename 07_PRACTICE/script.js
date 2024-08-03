const para = document.querySelector("#para");
const newBtn = document.querySelector(".btn");

newBtn.addEventListener("click", () => {
  for (let i = 1; i <= 10; i++) {
    setTimeout(() => {
      para.innerHTML = i;
    }, i * 500);
  }

  for (let i = 10; i >= 0; i--) {
    setTimeout(() => {
      para.innerHTML = i;
    }, (21 - i) * 500);
  }
});

