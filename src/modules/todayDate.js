export function todayDate() {
    const dateElements = document.getElementsByClassName('date');
    const date = new Date();
    
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;
    const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    for (let element of dateElements) {
        element.textContent = formattedDate;
    }
}

document.addEventListener('DOMContentLoaded', todayDate);