const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const text = document.querySelector(".text");

btn.addEventListener("click", () => {
  add();
});

const removeTask = (newEle) => {
  newEle.remove();
};
const addTask = (newEle) => {
  newEle.innerHTML = `${input.value} <i class="fa-regular fa-trash-can"></i>`;
  text.appendChild(newEle);
  input.value = "";
  newEle.querySelector("i").addEventListener("click", (e) => {
    e.stopPropagation();
    removeTask(newEle);
  });
};

function add() {
  if (input.value == "") {
    alert("Please Enter Task");
  } else {
    const newEle = document.createElement("ul");
    addTask(newEle);
  }
}

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    add();
  }
});
