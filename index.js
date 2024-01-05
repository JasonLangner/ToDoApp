let tasks = document.querySelector('.tasks')

const createTask = (prompt) => {

  const html = `
  <li class="task">
  <span class="task-text">${prompt}</span>
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

  // Done button
  let done = node.querySelector('.task-done');
  done.addEventListener('click', doneTask);

  function doneTask() {
    node.classList.toggle('done');
    
    if (node.classList.contains('done')) {
      done.querySelector('.icon').src = '/icons/Icons=Undo.svg';
    } else {
      done.querySelector('.icon').src = '/icons/Icons=Check.svg';
    }
  }


  // Cancel button
  let cancel = node.querySelector('.task-cancel');
  cancel.addEventListener('click', cancelTask);

  function cancelTask() {
    node.remove();
  }

  tasks.appendChild(node);
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
  catch (error){
    console.warn(error);
    alert("You didn't wrote a task in your textarea")
   }


})

// Progress bar
