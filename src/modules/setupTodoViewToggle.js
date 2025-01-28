import { setupTodoExpand } from './setupTodoExpand.js';

export function setupTodoViewToggle() {
    
    const dateListItems = document.querySelectorAll('#date-todo-list li');
    const categoryListItems = document.querySelectorAll('#categories-todo-list li');
    const containers = document.querySelectorAll('.container-right > div');

    function handleDateClick(event) {
        const clickedText = event.target.textContent.trim().toLowerCase();

        // if clicked on the same container, do nothing

        

        
        // if (targetContainer.style.display === 'flex') {
        //     setupTodoExpand();
        //     return;
        // }

        // Hide all containers
        containers.forEach(container => {
            container.style.display = 'none';
        });

        // Show the corresponding container
        const targetContainer = document.querySelector(`.container-${clickedText}`);
        if (targetContainer) {
            targetContainer.style.display = 'flex';
            setupTodoExpand(targetContainer);
        }
        
    }

    function handleCategoryClick(event) {
        const clickedCategory = event.target.textContent.trim().toLowerCase();

        // Hide all containers
        containers.forEach(container => {
            container.style.display = 'none';
        });

        // Show the category container
        const categoryContainer = document.querySelector('.container-category');
        if (categoryContainer) {
            categoryContainer.style.display = 'flex';
            setupTodoExpand(categoryContainer);
            // Optionally, filter tasks by category inside the category container
            // const tasks = categoryContainer.querySelectorAll('.todo-category');
            // tasks.forEach(task => {
            //     const categoryName = task.querySelector('.category-name').textContent.trim().toLowerCase();
            //     task.style.display = categoryName === clickedCategory ? 'flex' : 'none';
            // });
        }
    }

    // Add event listeners for date and category list items
    dateListItems.forEach(item => {
        item.addEventListener('click', handleDateClick);
    });

    categoryListItems.forEach(item => {
        item.addEventListener('click', handleCategoryClick);
    });

    // Initialize for the first visible container
    const firstVisibleContainer = Array.from(containers).find(
        container => window.getComputedStyle(container).display === 'flex'
    );
    if (firstVisibleContainer) {
        setupTodoExpand(firstVisibleContainer);
    }
}
