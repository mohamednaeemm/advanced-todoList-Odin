import { showAndHide } from './showAndHide.js';

export function categoryButtons() {
    const categoryContainers = document.querySelectorAll('[class^="container-category"]');

    const categoriesTodoLists = document.querySelectorAll('#categories-todo-list li');
    const categoryOptions = document.querySelectorAll('#category option');

    if (categoryContainers.length === 0) {
        console.warn("No categories found.");
        return;
    }

    categoryContainers.forEach(container => {
        const deleteButton = container.querySelector('.category-delete');
        const editButton = container.querySelector('.category-edit');
        const addButton = container.querySelector('.category-add-todo');
        const header = container.querySelector('h2');

        if (!header) return;

        let currentCategoryName = header.textContent.trim();

        // Delete Category
        if (deleteButton) {
            deleteButton.addEventListener('click', () => {
                if (confirm('Are you sure you want to delete this category?')) {
                    categoriesTodoLists.forEach(todo => {
                        if (todo.textContent.trim() === currentCategoryName) {
                            todo.remove();
                        }
                    });
        
                    categoryOptions.forEach(option => {
                        if (option.textContent.trim() === currentCategoryName) {
                            option.remove();
                        }
                    });
                    container.remove();
                }
            });
        }

        // Edit Category
        if (editButton) {
            editButton.addEventListener('click', () => {
                const newCategoryName = prompt('Enter new category name:', currentCategoryName)?.trim().toLowerCase();
        
                if (!newCategoryName) {
                    alert('Please enter a valid category name.');
                    return;
                }
        
                let categoryExists = false;
                categoriesTodoLists.forEach(todo => {
                    if (todo.textContent.trim().toLowerCase() === newCategoryName) {
                        categoryExists = true;
                    }
                });
        
                if (categoryExists) {
                    alert('Category already exists.');
                    return;
                }
        
                const finalValue = newCategoryName.charAt(0).toUpperCase() + newCategoryName.slice(1);
        
                container.className = `container-category${finalValue}`; // Update the class name
        
                // Update header, category list, and options
                header.innerHTML = `<i class='bx bx-hash'></i>${finalValue}`;
        
                categoriesTodoLists.forEach(todo => {
                    if (todo.textContent.trim() === currentCategoryName) {
                        todo.innerHTML = `<i class="bx bx-hash"></i>${finalValue}`;
                    }
                });
        
                categoryOptions.forEach(option => {
                    if (option.textContent.trim() === currentCategoryName) {
                        option.textContent = finalValue;
                        option.value = finalValue;
                    }
                });
        
                currentCategoryName = finalValue; // Update the current category name
            });
        }

        // Add Task Button
        if (addButton) {
            addButton.addEventListener('click', (e) => {
                e.stopPropagation();
                showAndHide(true, true);
            });
        }
    });
}
