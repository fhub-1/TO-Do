const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

// Load tasks from localStorage when the page loads
window.addEventListener("load", loadTasks);

addButton.addEventListener("click", addTask);
taskInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const taskItem = document.createElement("li");
  taskItem.innerHTML = `
        ${taskText}
        <button class="delete-button">Delete</button>
    `;

  taskList.appendChild(taskItem);

  // Save the task to localStorage
  saveTask(taskText);

  // Clear the input field
  taskInput.value = "";

  // Attach a delete event to the new task item
  const deleteButton = taskItem.querySelector(".delete-button");
  deleteButton.addEventListener("click", () => {
    taskItem.remove();
    // Remove the task from localStorage
    removeTask(taskText);
  });
}

function saveTask(taskText) {
  let tasks = getTasksFromStorage();
  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  console.log(tasks);
}

function removeTask(taskText) {
  let tasks = getTasksFromStorage();
  tasks = tasks.filter((task) => task !== taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasksFromStorage() {
  const tasksString = localStorage.getItem("tasks") || "[]";
  return JSON.parse(tasksString);
}

function loadTasks() {
  const tasks = getTasksFromStorage();
  tasks.forEach((taskText) => {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
            ${taskText}
            <button class="delete-button">Delete</button>
        `;
    taskList.appendChild(taskItem);

    // Sanitize the task text before adding it to the DOM
    const taskTextSanitized = document.createElement("div");
    taskTextSanitized.innerText = taskText;

    // Attach a delete event to the loaded task item
    const deleteButton = taskItem.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
      taskItem.remove();
      // Remove the task from localStorage
      removeTask(taskText);
    });
  });
}

// create function to show hello world alert
function helloWorld() {
  alert("Hello World!");
}

//create function to show cookies alert for user to accept when vist website it shloud show up only once per session  and not show up again when user refresh the page or visit another page
function cookies() {
  if (sessionStorage.getItem("cookies") != "true") {
    alert("This website uses cookies");
    sessionStorage.setItem("cookies", "true");
  }
}
