const taskForm = document.querySelector('#task-form');
const taskList = document.querySelector('#task-list');

let tasks = [];

function renderTasks() {
  taskList.innerHTML = '';
  
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task}</span>
      <button class="delete-button" onclick="deleteTask(${index})">Eliminar</button>`;
    
    taskList.appendChild(li);});
}

function addTask(e) {
  e.preventDefault();
  
  const newTask = document.querySelector('#new-task').value.trim();
  
  if (newTask !== '') {
    tasks.push(newTask);
    renderTasks();
    taskForm.reset();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

taskForm.addEventListener('submit', addTask);

