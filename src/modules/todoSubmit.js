export function todoSubmit() {
  const input = document.getElementById('todo-input');
  const date = document.getElementById('date');

    const submitButton = document.getElementById('submit-todo');
    submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      const todoList = document.getElementById('todo-list');
      const todoItem = document.createElement('li');
      todoItem.className = 'todo-item';
      todoItem.innerHTML = `
        <div class="todo-item-content">
          <input type="checkbox" id="checkbox">
          <label for="checkbox">${input.value}</label>
          <span class="date">${date.value}</span>
        </div>
        <div class="todo-item-actions">
          <button class="edit-todo">
            <i class="bx bx-edit"></i>
          </button>
          <button class="delete-todo">
            <i class="bx bx-trash"></i>
          </button>
        </div>
      `;
      todoList.appendChild(todoItem);
      input.value = '';
      date.value = '';
    });
}