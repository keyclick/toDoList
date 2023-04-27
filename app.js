// Get the form and the task list elements from the HTML
const form = document.querySelector("form");
const taskList = document.querySelector("#task-list");

// Add a submit event listener to the form
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Get the value of the new task input field
  const newTask = document.querySelector("#new-task").value;

  // Create a new list item element and set its text content to the new task
  const listItem = document.createElement("li");
  listItem.textContent = newTask;

  // Add the new list item to the task list
  taskList.appendChild(listItem);

  // Clear the input field
  document.querySelector("#new-task").value = "";
});
