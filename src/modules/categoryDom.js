export function categoryDom(categoryName) {
    const containerRight = document.querySelector('.container-right');
    const container = document.createElement('div');
    container.className = `container-category${categoryName}`;

    const header = document.createElement('h2');

    header.innerHTML = `<i class='bx bx-hash'></i>${categoryName}`;
    container.appendChild(header);

    const categoryButtons = document.createElement('div');
    categoryButtons.className = 'category-buttons';

    const deleteButton = document.createElement('button');
    deleteButton.className = 'category-delete';
    deleteButton.innerHTML = "Delete Category<i class='bx bxs-trash'></i>";
    categoryButtons.appendChild(deleteButton);

    const editButton = document.createElement('button');
    editButton.className = 'category-edit';
    editButton.innerHTML = "Edit Category<i class='bx bxs-edit'></i>";
    categoryButtons.appendChild(editButton);

    const addButton = document.createElement('button');
    addButton.className = 'category-add-todo';
    addButton.innerHTML = "Add A Task<i class='bx bx-plus'></i>";
    categoryButtons.appendChild(addButton);

    container.appendChild(categoryButtons);

    containerRight.appendChild(container);
}