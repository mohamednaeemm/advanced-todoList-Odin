const todos = [{ id: 1738952256319, title: "Study React", description: "Study React and do some problem solving", date: "2-2-2025", category: "Programming"}, { id: 1738951566629, title: "Study Grammer", description: "Study Present Simple", date: "2-2-2025", category: "English"}];

export function getTodos() {
    return todos;
}

export function addTodo(todo) {
    todos.push(todo);
}

import './style.css';
import { iconLi } from './modules/iconLi';
import { initializeEventListeners } from './modules/initializeEventListeners';
import { categorySubmit } from './modules/categorySubmit';
import { setupTodoViewToggle } from './modules/setupTodoViewToggle';
import { todoSubmit } from './modules/todoSubmit';
import { categoryButtons } from './modules/categoryButtons';

function initializeApp() {
    iconLi();
    initializeEventListeners();
    categorySubmit();
    setupTodoViewToggle();
    todoSubmit();
    categoryButtons();
}

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});
