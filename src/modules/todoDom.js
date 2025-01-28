export function todoDom(type, title, description, dueDate, category) {
    const todoContainer = document.createElement('div');
    todoContainer.className = `todo-${type}-full`;

    const todoType = document.createElement('div');
    todoType.className = `todo-${type}`;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = `todo-${type}-checkbox`;

    const titleElement = document.createElement('h3');
    titleElement.textContent = title;

    const categoryElement = document.createElement('h4');
    categoryElement.className = 'category-name';
    categoryElement.textContent = category;

    const dateElement = document.createElement('span');
    dateElement.className = `todo-${type}-date`;
    const date = new Date(dueDate);
    const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    dateElement.textContent = formattedDate;

    const iconsContainer = document.createElement('div');
    iconsContainer.className = `todo-${type}-icons`;

    const editIcon = document.createElement('i');
    editIcon.className = 'bx bxs-edit';

    const trashIcon = document.createElement('i');
    trashIcon.className = 'bx bxs-trash';

    const chevronIcon = document.createElement('i');
    chevronIcon.className = 'bx bxs-chevron-left';

    iconsContainer.appendChild(editIcon);
    iconsContainer.appendChild(trashIcon);
    iconsContainer.appendChild(chevronIcon);

    todoType.appendChild(checkbox);
    todoType.appendChild(titleElement);
    todoType.appendChild(categoryElement);
    todoType.appendChild(dateElement);
    todoType.appendChild(iconsContainer);

    const descriptionElement = document.createElement('p');
    descriptionElement.className = 'todo-description';
    descriptionElement.textContent = description;

    todoContainer.appendChild(todoType);
    todoContainer.appendChild(descriptionElement);

    return todoContainer;
}