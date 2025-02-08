import { showAndHide } from './showAndHide.js';

export function categoryDom(categoryName) {
    const containerRight = document.querySelector('.container-right');
    const container = document.createElement('div');
    container.className = `container-category${categoryName}`;

    let currentCategoryName = categoryName; // Mutable reference to keep track of the name

    const header = document.createElement('h2');
    header.innerHTML = `<i class='bx bx-hash'></i>${currentCategoryName}`;
    container.appendChild(header);

    const categoryButtons = document.createElement('div');
    categoryButtons.className = 'category-buttons';

    // Create Buttons
    const deleteButton = document.createElement('button');
    deleteButton.className = 'category-delete';
    deleteButton.innerHTML = "Delete Category <i class='bx bxs-trash'></i>";
    categoryButtons.appendChild(deleteButton);

    const editButton = document.createElement('button');
    editButton.className = 'category-edit';
    editButton.innerHTML = "Edit Category <i class='bx bxs-edit'></i>";
    categoryButtons.appendChild(editButton);

    const addButton = document.createElement('button');
    addButton.className = 'category-add-todo';
    addButton.innerHTML = "Add A Task <i class='bx bx-plus'></i>";
    categoryButtons.appendChild(addButton);

    container.appendChild(categoryButtons);
    containerRight.appendChild(container);

    const categoriesTodoLists = document.querySelectorAll('#categories-todo-list li');
    const categoryOptions = document.querySelectorAll('#category option');

    // Button Event Listeners
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

    addButton.addEventListener('click', (e) => {
        e.stopPropagation();
        showAndHide(true, true); 
    });
}
