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

  let done = node.querySelector('.task-done');
  
  let cancel = node.querySelector('.task-cancel');
  
  tasks.appendChild(node);
}

// Add button 
let stickyadd = document.querySelector('.sticky-add');

stickyadd.addEventListener('click', () => {
  
  let task = prompt("What do you want to do?", "");
  
  createTask(task);
})

// 

