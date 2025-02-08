import { getTodos } from '../app.js';

export function editTodo(id) {
    const todos = getTodos();
    const todoIndex = todos.findIndex(t => String(t.id) === String(id));
    
    if (todoIndex === -1) {
        console.warn(`Todo with id ${id} not found`);
        return;
    }

    const todoToEdit = todos[todoIndex];

    const newTitle = prompt('Edit title', todoToEdit.title) || todoToEdit.title;
    const newDescription = prompt('Edit description', todoToEdit.description) || todoToEdit.description;

    // Directly update the todo
    todoToEdit.title = newTitle;
    todoToEdit.description = newDescription;

    // Update the UI
    updateTodoInContainers(todoToEdit);
}

function updateTodoInContainers(todo) {
    const todoElements = document.querySelectorAll(`[data-id="${todo.id}"]`);
    todoElements.forEach(element => {
        const titleElement = element.querySelector('h3');
        const descriptionElement = element.querySelector('p');

        if (titleElement) titleElement.textContent = todo.title;
        if (descriptionElement) descriptionElement.textContent = todo.description;
    });
}

////// delete todo //////

export function deleteTodo(id) {
    let todos = getTodos();

    // Find and delete the todo by filtering it out
    todos = todos.filter(todo => String(todo.id) !== String(id));

    // Update the UI
    removeTodoFromContainers(id);
}

function removeTodoFromContainers(id) {
    const todoElements = document.querySelectorAll(`[data-id="${id}"]`);
    todoElements.forEach(element => {
        element.remove(); // Remove the element from the DOM
    });
}



