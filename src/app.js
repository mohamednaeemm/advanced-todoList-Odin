import './style.css';
import { iconLi } from './modules/iconLi';
import { initializeEventListeners } from './modules/initializeEventListeners';
import { categorySubmit } from './modules/categorySubmit';
import { setupTodoViewToggle } from './modules/setupTodoViewToggle';
import { todoSubmit } from './modules/todoSubmit';

function initializeApp() {
    iconLi();
    initializeEventListeners();
    categorySubmit();
    setupTodoViewToggle();
    todoSubmit();
}

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});
