import { editTodo } from "./todoButtons";
import { setupEditIcons } from "./setupEditIcons";
import { setupDeleteIcons } from "./setupDeleteIcons";
import { setupCheckedButtons } from "./setupCheckedButtons";

export function setupTodoExpand(container) {
    if (!container) return;

    const classNames = container.className.split('-');
    if (classNames.length > 1) {
        const containerCategory = classNames.pop();
        const todoFulls = container.querySelectorAll(`.todo-full-${containerCategory}`);

        // Remove existing event listeners if any by cloning the node
        todoFulls.forEach(todoFull => {
            const cloned = todoFull.cloneNode(true);
            todoFull.parentNode.replaceChild(cloned, todoFull);
        });

        const refreshedTodoFulls = container.querySelectorAll(`.todo-full-${containerCategory}`);

        refreshedTodoFulls.forEach(todoFull => {
            const todo = todoFull.querySelector(`.todo-${containerCategory}`);
            const chevron = todo.querySelector(`.todo-icons-${containerCategory} i:last-child`);
            const description = todoFull.querySelector('.todo-description');

            const editIcons = todoFull.querySelectorAll('.edit-todo');
            const deleteIcons = todoFull.querySelectorAll('.delete-todo');
            const checkedButtons = todoFull.querySelectorAll('.checked-todo');

            if(editIcons) {
                setupEditIcons();
            }

            if(deleteIcons) {
                setupDeleteIcons();
            }

            if(checkedButtons) {
                setupCheckedButtons();
            }

            todoFull.addEventListener('click', () => {
                refreshedTodoFulls.forEach(otherTodoFull => {
                    const otherTodo = otherTodoFull.querySelector(`.todo-${containerCategory}`);
                    const otherChevron = otherTodo.querySelector(`.todo-icons-${containerCategory} i:last-child`);
                    const otherDescription = otherTodoFull.querySelector('.todo-description');

                    if (otherTodoFull !== todoFull) {
                        otherChevron.className = 'bx bxs-chevron-left';
                        otherTodo.style.height = 'auto';
                        otherDescription.style.display = 'none';
                    }
                });

                // Toggle the clicked todo
                if (chevron.className === 'bx bxs-chevron-left') {
                    chevron.className = 'bx bxs-chevron-down';
                    // description.textContent = todo.dataset.description || 'There is no description.';
                    description.style.display = 'block';
                } else {
                    chevron.className = 'bx bxs-chevron-left';
                    description.style.display = 'none';
                }
            });
        });
    } else {
        console.error('Unexpected container class structure:', container.className);
    }
}
