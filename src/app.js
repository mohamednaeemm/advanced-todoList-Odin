import './style.css';
import { iconLi } from './modules/iconLi';
import { initializeEventListeners } from './modules/initializeEventListeners';
import { categorySubmit } from './modules/categorySubmit';

function initializeApp() {
    iconLi();
    initializeEventListeners();
    categorySubmit();
}

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});
