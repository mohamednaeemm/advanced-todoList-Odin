export function setupTodoExpand(container) {
    if (!container) return;

    const classNames = container.className.split('-');
    if (classNames.length > 1) {
        const containerCategory = classNames.pop();
        const todoFulls = container.querySelectorAll(`.todo-${containerCategory}-full`);

        // Remove existing event listeners if any by cloning the node
        todoFulls.forEach(todoFull => {
            const cloned = todoFull.cloneNode(true);
            todoFull.parentNode.replaceChild(cloned, todoFull);
        });

        const refreshedTodoFulls = container.querySelectorAll(`.todo-${containerCategory}-full`);

        refreshedTodoFulls.forEach(todoFull => {
            const todo = todoFull.querySelector(`.todo-${containerCategory}`);
            const chevron = todo.querySelector(`.todo-${containerCategory}-icons i:last-child`);
            const description = todoFull.querySelector('.todo-description');

            todoFull.addEventListener('click', () => {
                refreshedTodoFulls.forEach(otherTodoFull => {
                    const otherTodo = otherTodoFull.querySelector(`.todo-${containerCategory}`);
                    const otherChevron = otherTodo.querySelector(`.todo-${containerCategory}-icons i:last-child`);
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
                    description.textContent = todo.dataset.description || 'There is no description.';
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
