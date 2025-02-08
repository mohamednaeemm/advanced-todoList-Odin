import { editTodo } from './todoButtons.js';

export function setupEditIcons() {
    const editIcons = document.querySelectorAll('.edit-todo');

    // Clean up old listeners before adding new ones
    editIcons.forEach(icon => {
        icon.replaceWith(icon.cloneNode(true));
    });

    document.querySelectorAll('.edit-todo').forEach(editIcon => {
        editIcon.addEventListener('click', event => {
            event.stopPropagation(); // Prevent parent click event
            const todoFull = editIcon.parentElement.parentElement.parentElement;
            const id = todoFull?.getAttribute('data-id');
            if (id) editTodo(id);
        });
    });
}