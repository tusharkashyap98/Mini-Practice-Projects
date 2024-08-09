const btn = document.querySelector("#btn");
let input = document.querySelector("#input-value");
let text = document.querySelector(".text");

btn.addEventListener("click", () => {
  add();
});

function add() {
  if (input.value == "") {
    alert("Please Enter Task");
  } else {
    let newEle = document.createElement("ul");
    newEle.innerHTML = `${input.value}`;
    text.appendChild(newEle);
    input.value = "";
    let deleteBtn = document.createElement("button");
    deleteBtn.classList = "deleteBtn";
    deleteBtn.innerHTML = "Delete";
    newEle.appendChild(deleteBtn);
    function removeTask() {
      newEle.remove();
    }
    deleteBtn.addEventListener("click", () => {
      removeTask();
    });
  }
}

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    add();
  }
});
