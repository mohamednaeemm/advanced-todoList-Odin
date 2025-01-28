export function todoSubmit() {
    document.getElementById('add-todo-btn').addEventListener('click', (event) => {
        event.preventDefault();

        // Get form inputs
        const titleInput = document.getElementById('todo-input');
        const categorySelect = document.getElementById('category');
        const dateInput = document.getElementById('date');
        const title = titleInput.value.trim();
        const category = categorySelect.value;
        const date = new Date(dateInput.value);
        const today = new Date();
        
        // Ensure today's time is midnight for comparison
        today.setHours(0, 0, 0, 0);

        // Validate title input
        if (title === "") {
            alert("Please enter a title for your todo.");
            return;
        }

        // Validate category selection
        // if (!category) {
        //     alert("Please select a category.");
        //     return;
        // }

        // Validate date
        if (isNaN(date.getTime())) {
            alert("Please select a valid date.");
            return;
        }

        if (date < today) {
            alert("Please choose a date that is today or in the future.");
            return;
        }

        // Create the todo element
        const todoItem = document.createElement('li');
        todoItem.textContent = title;

        // Add icon to the todo item
        const icon = document.createElement('i');
        icon.className = 'bx bx-check';
        todoItem.prepend(icon);

        // Add to category container
        const categoryContainer = document.querySelector(`#categories-todo-list li:contains("${category}")`);
        if (categoryContainer) {
            categoryContainer.appendChild(todoItem.cloneNode(true));
        }

        // Add to date-specific containers
        const oneDayInMs = 24 * 60 * 60 * 1000;
        const diffInDays = Math.round((date - today) / oneDayInMs);

        if (diffInDays === 0) {
            // Add to "Today" container
            const todayContainer = document.querySelector('.today-container ul');
            todayContainer.appendChild(todoItem.cloneNode(true));
        } else if (diffInDays > 0 && diffInDays <= 7) {
            // Add to "Week" container
            const weekContainer = document.querySelector('.week-container ul');
            weekContainer.appendChild(todoItem.cloneNode(true));
        } else if (diffInDays > 7) {
            // Add to "Upcoming" container
            const upcomingContainer = document.querySelector('.upcoming-container ul');
            upcomingContainer.appendChild(todoItem.cloneNode(true));
        }

        // Reset the form
        titleInput.value = "";
        dateInput.value = "";
    });
}
