import { showAndHide } from "./showAndHide.js";
import { todoDom } from "./todoDom";
import { setupTodoExpand } from "./setupTodoExpand";
import { whichContainerIsOpen } from './whichContainerIsOpen.js';
import { addTodo } from '../app.js';

export function todoSubmit() {
    const contianerToday = document.querySelector('.container-today');
    const containerWeek = document.querySelector('.container-week');
    const containerUpcoming = document.querySelector('.container-upcoming');
    
    document.getElementById('add-todo-btn').addEventListener('click', (event) => {
        event.preventDefault();

        // Get form inputs
        const titleInput = document.getElementById('todo-input');
        const categorySelect = document.getElementById('category');
        const dateInput = document.getElementById('date');
        const descriptionInput = document.getElementById('description');

        const title = titleInput.value.trim();
        const category = categorySelect.value;
        const description = descriptionInput.value.trim() || 'There is no description.';
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

        // Unique ID for each todo
        const id = Date.now();

        // Add to date-specific containers
        const oneDayInMs = 24 * 60 * 60 * 1000;
        const diffInDays = Math.round((date - today) / oneDayInMs);

        const newTodo = { id, title, description, date, category };

        addTodo(newTodo);

        if (diffInDays === 0) {
            // todayContainer.appendChild(todoItem.cloneNode(true));
            const todoToday = todoDom(id, 'today', title, description, date, category);
            contianerToday.appendChild(todoToday);

            const todoWeek = todoDom(id, 'week', title, description, date, category);
            containerWeek.appendChild(todoWeek);

            const todoUpcoming = todoDom(id, 'upcoming', title, description, date, category);
            containerUpcoming.appendChild(todoUpcoming);

        } else if (diffInDays > 0 && diffInDays <= 7) {
            const todoWeek = todoDom(id, 'week', title, description, date, category);
            containerWeek.appendChild(todoWeek);

            const todoUpcoming = todoDom(id, 'upcoming', title, description, date, category);
            containerUpcoming.appendChild(todoUpcoming);
            // weekContainer.appendChild(todoItem.cloneNode(true));

        } else if (diffInDays > 7) {
            // upcomingContainer.appendChild(todoItem.cloneNode(true));
            const todoUpcoming = todoDom(id, 'upcoming', title, description, date, category);
            containerUpcoming.appendChild(todoUpcoming);
        }

        if (category) {
            const todoCategory = todoDom(id, `category${category}`, title, description, date, category);
            
            const categoryContainer = document.querySelector(`.container-category${category}`);
            categoryContainer.appendChild(todoCategory);
        }

        showAndHide(false, true);

        setupTodoExpand(whichContainerIsOpen());
        
        // Reset the form
        titleInput.value = "";
        descriptionInput.value = "";
        dateInput.value = "";
    });
}
