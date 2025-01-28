import { todayDate } from './todayDate.js';

export function showAndHide(show, todo) {
    const container = document.querySelector('.container');
    const todoContainer = document.querySelector('.todo-list-container');
    const category = document.querySelector('.category-container');
    todayDate();

  if(show && todo) {
    container.classList.add('opacity');
    todoContainer.style.display = 'flex';
  } else if (!show && todo) {
    container.classList.remove('opacity');
    todoContainer.style.display = 'none';
  } else if (show && !todo) {
    container.classList.add('opacity');
    category.style.display = 'flex';
  } else {
    container.classList.remove('opacity');
    category.style.display = 'none';
  }
}
