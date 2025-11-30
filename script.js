document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Load tasks from localStorage
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Show tasks on page load
  loadTasks();

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Add to DOM
    createTaskElement(taskText);

    // Add to array
    tasks.push(taskText);

    // Save to localStorage
    saveTasks();

    // Clear input
    taskInput.value = "";
  }

  // Function to create <li> with remove button
  function createTaskElement(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");

    removeBtn.onclick = function () {
      // Remove from array
      tasks = tasks.filter(task => task !== taskText);

      // Save update
      saveTasks();

      // Remove from DOM
      li.remove();
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);
  }

  // Load saved tasks from localStorage
  function loadTasks() {
    tasks.forEach(task => createTaskElement(task));
  }

  // Save tasks to localStorage
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Button click adds task
  addButton.addEventListener("click", addTask);

  // Pressing Enter adds task
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

});
