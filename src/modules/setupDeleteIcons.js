import { deleteTodo } from './todoButtons.js';

export function setupDeleteIcons() {
    const deleteIcons = document.querySelectorAll('.delete-todo');

    // Clean up old listeners before adding new ones
    deleteIcons.forEach(icon => {
        icon.replaceWith(icon.cloneNode(true));
    });

    document.querySelectorAll('.delete-todo').forEach(deleteIcon => {
        deleteIcon.addEventListener('click', event => {
            event.stopPropagation(); // Prevent parent click event
            const todoFull = deleteIcon.parentElement.parentElement.parentElement;
            const id = todoFull?.getAttribute('data-id');
            if (id) {
                const confirmDelete = confirm('Are you sure you want to delete this todo?');
                if (confirmDelete) deleteTodo(id);
            }
        });
    });
}
