import { createTask } from '/scripts/create.js'
import { observerObserve } from '/scripts/observer.js';

let buttonList = document.querySelectorAll('.button');

// MutationObserver
observerObserve;


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

