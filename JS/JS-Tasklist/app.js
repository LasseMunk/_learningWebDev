// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners 

loadEventListeners();

// Load all event listeners

function loadEventListeners() {
  // DOM Load Event - update UI when page is loaded, from
  // keys stored in local storage
  // DOMContentLoaded is fired right when the DOM is loadded
  document.addEventListener('DOMContentLoaded', getTasks);

  // Add Task Event
  form.addEventListener('submit', addTask);

  // remove task event
  // we put it on the ul ('collection'), because there are multiple
  // task lis, therefore we need event delegation
  taskList.addEventListener('click', removeTask);

  // Clear Task event
  clearBtn.addEventListener('click', clearTasks)  

  // Filter Tasks Event
  filter.addEventListener('keyup', filterTasks);
  
}

// Get Tasks from LS
function getTasks() {
  let tasks;
  // check if there is any tasks in local storage
  if(localStorage.getItem('tasks') === null) {
    // set to empty array if nothing is any tasks
    tasks = [];
  } else {
    // local storage only stores strings, so we parse the strings
    // when they are returned from local storage
    // tasks array, before we push the new task, update and save they
    // updated array
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.forEach(function(task){

    // create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(task));
    // create new link element (the X to delete later)
    const link = document.createElement('a');
    // Add class
    // secondary-content is a materialize specific class
    // which aligns to the right
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fas fa-trash-alt"></i>';
    // append the link to the li
    li.appendChild(link);
    // append li to ul
    taskList.appendChild(li);
  });

}

// Add Task
function addTask(e) {
  
  if(taskInput.value === '') {
    // If nothing is written in the task field
    alert('Add a task');
  }

  // create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // create new link element (the X to delete later)
  const link = document.createElement('a');
  // Add class
  // secondary-content is a materialize specific class
  // which aligns to the right
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fas fa-trash-alt"></i>';
  // append the link to the li
  li.appendChild(link);
  // append li to ul
  taskList.appendChild(li);

  // Store Task in LS
  storeTaskInLocalStorage(taskInput.value);

  // clear task input
  taskInput.value = '';

  // prevent default form submit, so we don't reload / get redirected
  e.preventDefault();
}

// Store Task in LS
function storeTaskInLocalStorage(task) {
  let tasks;

  // check if there is any tasks in local storage
  if(localStorage.getItem('tasks') === null) {
    // set to empty array if nothing is any tasks
    tasks = [];
  } else {
    // local storage only stores strings, so we parse the strings
    // when they are returned from local storage
    // tasks array, before we push the new task, update and save they
    // updated array
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

    tasks.push(task);
    // save the key of tasks in localstorage, encoded as string
    localStorage.setItem('tasks', JSON.stringify(tasks));

}

// Remove Task
function removeTask(e) {
  // this gets called if we click anywhere inside '.collection'
  // we therefore wrap in an if-statement which checks if we clicked
  // the trash icon

  if(e.target.parentElement.classList.contains('delete-item'))
  {
    if(confirm('are you sure?')) {
      // confirm is a confirmation dialog
      // if it turns true (user clicks yes), then remove

      // e.target is the <i ..> font-awesome icon.
      // therefore target parentElement (<a ...>) and parentElemnt(<li>)
      e.target.parentElement.parentElement.remove();

      // remove from LS
      // we have to pass in the actual element, because we don't
      // have a pr. task ID
      removeTaskFromLocalStorage
      (e.target.parentElement.parentElement);
    }
  }
}

// Remove from LS
function removeTaskFromLocalStorage(taskItem) {
  let tasks;

  // check if there is any tasks in local storage
  if(localStorage.getItem('tasks') === null) {
    // set to empty array if nothing is any tasks
    tasks = [];
  } else {
    // local storage only stores strings, so we parse the strings
    // when they are returned from local storage
    // tasks array, before we push the new task, update and save they
    // updated array
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  // index is the index of the current forEach loop
  tasks.forEach(function(task, index){
    if(taskItem.textContent === task) {
      // we want to delete 1 from the index
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
  
}

// Clear Tasks
function clearTasks() {
  // taskList.innerHTML = '';

  // much faster version 
  while(taskList.firstChild) {
    // while there still is something in the taskList
    // then remove this first child
    taskList.removeChild(taskList.firstChild);
  }

  // Clear from LS
  clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage() {
  localStorage.clear();
}

function filterTasks(e) {
  // get what is typed into the filter task input
  // toLowerCase makes everything you type lowercase
  // so we are sure to match correctly
  const text = e.target.value.toLowerCase();

  // querySelectorAll returns a nodelist which we can forEach through
  document.querySelectorAll('.collection-item')
  .forEach(function(task) {
    // select the text content of the first child in .collection-item
    const item = task.firstChild.textContent;
    
    // to lower case because the search is lower case
    // if there is no match, then it will = -1.
    // if statement is true, if it's not equal to -1
    if(item.toLowerCase().indexOf(text) != -1) {
      // this is true if there is a match of the search
      // display it as a block element
      task.style.display = 'block';
    } else {
      // if it doesn't match, then don't display
      task.style.display = 'none';
    }
  });
}