let tasks = document.querySelector('.tasks')
let buttonList = document.querySelectorAll('.button');
let incomplete = document.querySelector('.incomplete');
let complete = document.querySelector('.complete');

// MutationObserver
const config = { attributes: true, childList: true, subtree: true };

let progress = document.querySelector('.sticky-progress-fill');

const callback = (mutationList, observer) => {
  let taskAll = document.querySelectorAll(".task");

  if (taskAll.length === 0) {
    return (progress.style.width = `0%`)
  }

  let taskComplete = document.querySelectorAll(".task.done");
  let taskIncomplete = tasks.querySelectorAll("li:not(.done)");

  var progressPercent = 100 / taskAll.length * taskComplete.length;
  progress.style.width = `${progressPercent}%`;

  if (complete.classList.contains('active')) {
    for (let task of taskIncomplete) {
      task.style.display = ('none');
    }
  } else {
    for (let task of taskIncomplete) {
      task.style.display = ('flex');
    }
  }

  if (incomplete.classList.contains('active')) {
    for (let task of taskComplete) {
      task.style.display = ('none');
    }
  } else {
    for (let task of taskComplete) {
      task.style.display = ('flex');
    }
  }
}

const observer = new MutationObserver(callback);

observer.observe(tasks, config);

// Filter
for (let button of buttonList) {
  button.addEventListener('click', () => {

    for (let button2 of buttonList) {
      button2.classList.remove('active');
    }
    if (!button.classList.contains('reset'))
      button.classList.add('active');
  }
  )
}



// create Task
const createTask = (prompt, local = false) => {

  let storage = {
    text: prompt,
    id: Date.now(),
    isCompleted: false,
  }

  if (!local) {
    localStorage.setItem(storage.id, JSON.stringify(storage));
  } else {
    storage = local;
  }



  const html = `
  <li class="task" id="${storage.id}">
  <input class="task-text" value='${storage.text}' readonly>
  <div class="task-buttons">
  <button class="task-done">
    <img class="icon" src="/icons/Icons=Check.svg" alt="check">
  </button>  
  <button class="task-cancel">
    <img class="icon" src="/icons/Icons=Cancel.svg" alt="cancel"></button>
  </div>
 </li>
 `;

  const node = new DOMParser().parseFromString(html, "text/html").body.firstElementChild;


  // Edit
  let taskText = node.querySelector('.task-text');
  taskText.addEventListener('click', editText)

  function editText() {
    taskText.readOnly = false;
  }

  taskText.addEventListener("keypress", function (enter) {

    if (enter.key === "Enter") {
      taskText.readOnly = true;
      storage.text = taskText.value;
      localStorage.setItem(storage.id, JSON.stringify(storage));
      taskText.blur();
      
      if (taskText.value.length === 0) {
        node.remove();
        localStorage.removeItem(storage.id);
      }
    }


  })


  // Done button
  let done = node.querySelector('.task-done');
  done.addEventListener('click', doneTask);

  function doneTask() {
    node.classList.toggle('done');

    if (node.classList.contains('done')) {
      done.querySelector('.icon').src = '/icons/Icons=Undo.svg';
      storage.isCompleted = true;
      localStorage.setItem(storage.id, JSON.stringify(storage));

    } else {
      done.querySelector('.icon').src = '/icons/Icons=Check.svg';
      storage.isCompleted = false;
      localStorage.setItem(storage.id, JSON.stringify(storage));
    }
  }


  if (storage.isCompleted) {
    node.classList.add('done');
    done.querySelector('.icon').src = '/icons/Icons=Undo.svg';
  }


  // Cancel button
  let cancel = node.querySelector('.task-cancel');
  cancel.addEventListener('click', cancelTask);

  function cancelTask() {
    node.remove();
    localStorage.removeItem(storage.id);
  }

  tasks.appendChild(node);
}

// render Task

for (let key of Object.keys(localStorage)) {
  let task = localStorage.getItem(key);
  createTask("", JSON.parse(task));
}


// Add button 
let stickyadd = document.querySelector('.sticky-add');

stickyadd.addEventListener('click', () => {

  try {
    let task = prompt("What do you want to do?");

    if (task.length === 0) {
      return;
    }
    createTask(task);
  }
  catch (error) {
    console.warn(error);
    alert("You didn't wrote a task in your textarea")
  }


})

