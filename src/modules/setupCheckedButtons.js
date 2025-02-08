import { deleteTodo } from './todoButtons.js';

export function setupCheckedButtons() {
    const checkedButtons = document.querySelectorAll('.checked-todo');

    // Clean up old listeners before adding new ones
    checkedButtons.forEach(checkButton => {
        checkButton.replaceWith(checkButton.cloneNode(true));
    });

    document.querySelectorAll('.checked-todo').forEach(checkedButton => {
        checkedButton.addEventListener('click', event => {
            event.stopPropagation(); // Prevent parent click event
            const todoFull = checkedButton.parentElement.parentElement;
            const id = todoFull?.getAttribute('data-id');
            if (id) {
                const confirmChecked = confirm('Are you sure you finished this?');
                if (confirmChecked) deleteTodo(id);
            }
        });
    });
}
