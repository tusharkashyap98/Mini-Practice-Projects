
const btn = document.querySelector("#btn");
const input = document.querySelector("#input-value");
const text = document.querySelector(".text");

btn.addEventListener("click", () => {
  add();
});

const addTask =(newEle) =>{
  newEle.innerHTML = `${input.value}`;
  text.appendChild(newEle);
  input.value = "";
}

const addDeleteBtn =(deleteBtn, newEle) => {
  deleteBtn.classList = "deleteBtn";
  deleteBtn.innerHTML = "Delete";
  newEle.appendChild(deleteBtn);
}

const removeTask=(newEle) =>{
  newEle.remove();
}


function add() {
  if (input.value == "") {
    alert("Please Enter Task");
  } else {
    const newEle = document.createElement("ul");
    addTask(newEle);

    const deleteBtn = document.createElement("button");
    addDeleteBtn(deleteBtn, newEle);

    deleteBtn.addEventListener("click", () => {
      removeTask(newEle);
    });
  }
}

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    add();
  }
});
