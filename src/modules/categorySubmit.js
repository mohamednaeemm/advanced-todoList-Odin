import { showAndHide } from './showandhide.js';
import { categoryDom } from './categoryDom.js';
import { setupTodoViewToggle } from './setupTodoViewToggle.js';

export function categorySubmit() {
    const input = document.getElementById('category-input');
    const submitButton = document.querySelector('.category-submit-button');
    const categoriesList = document.getElementById('categories-todo-list');
    const addCategoryOption = document.getElementById('category');

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();

        const value = input.value.trim().toLowerCase();

        if (value === '') {
            alert('Please enter a category');
            return;
        }

        // Check if the category already exists
        let categoryExists = false;
        categoriesList.querySelectorAll('li').forEach((listItem) => {
            const listItemText = listItem.textContent.trim().toLowerCase();
            if (listItemText === value) {
                categoryExists = true;
            }
        });

        if (categoryExists) {
            alert('Category already exists');
            return;
        }

        const finalValue = value.charAt(0).toUpperCase() + value.slice(1);

        // Create and append the new category item
        const categoryItem = document.createElement('li');
        categoryItem.textContent = finalValue;

        const icon = document.createElement('i');
        icon.className = 'bx bx-hash';
        categoryItem.prepend(icon);

        categoriesList.appendChild(categoryItem);

        // Create and append the new category option
        const categoryOption = document.createElement('option');
        categoryOption.value = finalValue;
        categoryOption.textContent = finalValue;
        addCategoryOption.appendChild(categoryOption);

        // Create and append the new category container
        categoryDom(finalValue);
        
        // Hide the category input container
        showAndHide(false, false);
        setupTodoViewToggle();
        // Clear the input field
        input.value = '';
    });
}
