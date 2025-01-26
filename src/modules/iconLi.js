export function iconLi() {
  const categoriesList = document.getElementById('categories-todo-list');

  categoriesList.querySelectorAll('li').forEach((listItem) => {
    const icon = document.createElement('i');
    icon.className = 'bx bx-hash';
    listItem.prepend(icon);
  });
}