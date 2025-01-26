import './style.css';
import { iconLi } from "./modules/iconLi";
import { showAndHide } from "./modules/showandhide";

function initializeEventListeners() {
    document.querySelector('.add-todo').addEventListener('click', (e) => {
        e.stopPropagation();
        showAndHide(true, true);
    });
    
    document.querySelector('.close-todo').addEventListener('click', () => showAndHide(false, true));
    
    document.querySelector('.add-category').addEventListener('click', (e) => {
        e.stopPropagation();
        showAndHide(true, false);
    });
    
    document.querySelector('.close-category').addEventListener('click', () => showAndHide(false, false));
    
    // Listen for clicks outside the containers
    document.addEventListener('click', (e) => {
        const todoContainer = document.querySelector('.todo-list-container');
        const categoryContainer = document.querySelector('.category-container');
    
        if (todoContainer.style.display === 'flex' && !todoContainer.contains(e.target)) {
            showAndHide(false, true);
        }
    
        if (categoryContainer.style.display === 'flex' && !categoryContainer.contains(e.target)) {
            showAndHide(false, false);
        }
    });
    
}

function initializeApp() {
    iconLi();
    initializeEventListeners();
}

// Run the app
initializeApp();
