let tasks = [];

const addTask = () => {
  const taskInput = document.getElementById("taskInput");
  const text = taskInput.value.trim();
  if (text) {
    tasks.push({ text: text, completed: false });
    taskInput.value = "";
    updateTasksList();  // ✅ Correct function name
  }
};

const updateTasksList = () => {
  const taskList = document.getElementById('task-list');  // ✅ Ensure correct ID
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");

    listItem.innerHTML = `<div class="taskItem">
      <div class="task ${task.completed ? "completed" : ""}">
          <input type="checkbox" class="checkbox" ${task.completed ? "checked" : ""} onchange="toggleTaskComplete(${index})">
          <p>${task.text}</p>
      </div>
      <div class="icons">
          <img src="assets/icons8-edit-50.png" onclick="editTask(${index})">
          <img src="assets/icons8-bin-48.png" onclick="deleteTask(${index})">
      </div>
    </div>`;

    taskList.append(listItem);
  });
};

// ✅ Define missing function
const toggleTaskComplete = (index) => {
  tasks[index].completed = !tasks[index].completed;
  updateTasksList();
};

document.getElementById("newTask").addEventListener("click", function (e) {
  e.preventDefault();
  addTask(); 
});
