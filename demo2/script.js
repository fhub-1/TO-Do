const form = document.querySelector("form");
const todoList = document.querySelector("#todo-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodo = document.querySelector("#new-todo").value.trim();
  if (newTodo.length === 0) {
    return;
  }
  const todo = {
    text: newTodo,
    completed: false,
  };
  fetch("/api/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  })
    .then((response) => response.json())
    .then((data) => {
      const newTodoList = [...data, todo];
      todoList.innerHTML = "";
      newTodoList.forEach((todo) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" ${
          todo.completed ? "checked" : ""
        }>`;
        li.innerHTML += `<span>${todo.text}</span>`;
        li.innerHTML += `<button>Delete</button>`;
        todoList.appendChild(li);
      });
    })
    .catch((error) => console.error(error));
});

todoList.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const todo = e.target.parentNode.parentNode;
    const completed = todo.querySelector('input[type="checkbox"]').checked;
    fetch("/api/todos/" + todo.id, {
      method: completed ? "PUT" : "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (completed) {
          todo.classList.add("completed");
        } else {
          todo.classList.remove("completed");
        }
      })
      .catch((error) => console.error(error));
  }
});
