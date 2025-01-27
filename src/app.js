import './style.css';
import { iconLi } from './modules/iconLi';
import { initializeEventListeners } from './modules/initializeEventListeners';
import { categorySubmit } from './modules/categorySubmit';
import { todayDate } from './modules/todayDate';
import { setupTodoViewToggle } from './modules/setupTodoViewToggle';

function initializeApp() {
    todayDate();
    iconLi();
    initializeEventListeners();
    categorySubmit();
    setupTodoViewToggle();
}

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});
