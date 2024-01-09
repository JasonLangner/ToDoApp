 export const createTask = (prompt, local = false) => {
  
  let tasks = document.querySelector('.tasks')
  
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
      taskText.disabled = true;

    } else {
      done.querySelector('.icon').src = '/icons/Icons=Check.svg';
      storage.isCompleted = false;
      localStorage.setItem(storage.id, JSON.stringify(storage));
      taskText.disabled = false;
    }
  }


  if (storage.isCompleted) {
    node.classList.add('done');
    done.querySelector('.icon').src = '/icons/Icons=Undo.svg';
    taskText.disabled = true;
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

export default createTask;
