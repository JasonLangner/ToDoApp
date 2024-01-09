let tasks = document.querySelector('.tasks')
let incomplete = document.querySelector('.incomplete');
let complete = document.querySelector('.complete');


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

export const observerObserve = observer.observe(tasks, config);

