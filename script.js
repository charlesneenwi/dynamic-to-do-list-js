document.addEventListener("DOMContentLoaded", function() {

  //select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

//function to add a new task
function addTask(){
 const taskText = taskInput.value.trim();

 if (taskText === "") {
  alert("please enter a task.");
  return;
 }

  // Create <li>
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create Remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    // Add delete functionality
    removeBtn.onclick = function () {
      li.remove();
    };

    // Add remove button into the <li>
    li.appendChild(removeBtn);

    // Add the <li> into the <ul>
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
  }

    // Button click adds task
  addButton.addEventListener("click", addTask);

  // Pressing Enter also adds task
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();

    }
  
});
  
});
