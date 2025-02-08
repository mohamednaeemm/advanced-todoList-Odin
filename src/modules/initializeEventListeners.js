import { showAndHide } from './showAndHide.js';

export function initializeEventListeners() {
    const addTodoBtn = document.querySelector('.add-todo');
    const closeTodoBtn = document.querySelector('.close-todo');
    const addCategoryBtn = document.querySelector('.add-category');
    const closeCategoryBtn = document.querySelector('.close-category');

    if (addTodoBtn) {
        addTodoBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showAndHide(true, true);
        });
    }

    if (closeTodoBtn) {
        closeTodoBtn.addEventListener('click', () => {
            showAndHide(false, true);
        });
    }

    if (addCategoryBtn) {
        addCategoryBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showAndHide(true, false);
        });
    }

    if (closeCategoryBtn) {
        closeCategoryBtn.addEventListener('click', () => {
            showAndHide(false, false);
        });
    }

    // Attach global click handler for closing containers
    document.addEventListener('click', (e) => {
        const todoContainer = document.querySelector('.todo-list-container');
        const categoryContainer = document.querySelector('.category-container');

        if (todoContainer?.style.display === 'flex' && !todoContainer.contains(e.target)) {
            showAndHide(false, true);
        }

        if (categoryContainer?.style.display === 'flex' && !categoryContainer.contains(e.target)) {
            showAndHide(false, false);
        }
    });
}
