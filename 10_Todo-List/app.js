document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("add-btn");
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");
  
    addButton.addEventListener("click", () => {
      const todoText = todoInput.value.trim();
      if (todoText !== "") {
        addTodoItem(todoText);
        todoInput.value = "";
      }
    });
  
    todoInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addButton.click();
      }
    });
  
    function addTodoItem(text) {
      const listItem = document.createElement("li");
      listItem.className = "todo-item";
  
      const itemText = document.createElement("span");
      itemText.textContent = text;
      listItem.appendChild(itemText);
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        todoList.removeChild(listItem);
      });
      listItem.appendChild(deleteButton);
  
      todoList.appendChild(listItem);
    }
  });
  