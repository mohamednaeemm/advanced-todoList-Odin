/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTodo: () => (/* binding */ addTodo),\n/* harmony export */   getTodos: () => (/* binding */ getTodos)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_iconLi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/iconLi */ \"./src/modules/iconLi.js\");\n/* harmony import */ var _modules_initializeEventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/initializeEventListeners */ \"./src/modules/initializeEventListeners.js\");\n/* harmony import */ var _modules_categorySubmit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/categorySubmit */ \"./src/modules/categorySubmit.js\");\n/* harmony import */ var _modules_setupTodoViewToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/setupTodoViewToggle */ \"./src/modules/setupTodoViewToggle.js\");\n/* harmony import */ var _modules_todoSubmit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/todoSubmit */ \"./src/modules/todoSubmit.js\");\n/* harmony import */ var _modules_categoryButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/categoryButtons */ \"./src/modules/categoryButtons.js\");\nconst todos = [{ id: 1738952256319, title: \"Study React\", description: \"Study React and do some problem solving\", date: \"2-2-2025\", category: \"Programming\"}, { id: 1738951566629, title: \"Study Grammer\", description: \"Study Present Simple\", date: \"2-2-2025\", category: \"English\"}];\r\n\r\nfunction getTodos() {\r\n    return todos;\r\n}\r\n\r\nfunction addTodo(todo) {\r\n    todos.push(todo);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction initializeApp() {\r\n    (0,_modules_iconLi__WEBPACK_IMPORTED_MODULE_1__.iconLi)();\r\n    (0,_modules_initializeEventListeners__WEBPACK_IMPORTED_MODULE_2__.initializeEventListeners)();\r\n    (0,_modules_categorySubmit__WEBPACK_IMPORTED_MODULE_3__.categorySubmit)();\r\n    (0,_modules_setupTodoViewToggle__WEBPACK_IMPORTED_MODULE_4__.setupTodoViewToggle)();\r\n    (0,_modules_todoSubmit__WEBPACK_IMPORTED_MODULE_5__.todoSubmit)();\r\n    (0,_modules_categoryButtons__WEBPACK_IMPORTED_MODULE_6__.categoryButtons)();\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    initializeApp();\r\n});\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/modules/categoryButtons.js":
/*!****************************************!*\
  !*** ./src/modules/categoryButtons.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   categoryButtons: () => (/* binding */ categoryButtons)\n/* harmony export */ });\n/* harmony import */ var _showAndHide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showAndHide.js */ \"./src/modules/showAndHide.js\");\n\r\n\r\nfunction categoryButtons() {\r\n    const categoryContainers = document.querySelectorAll('[class^=\"container-category\"]');\r\n\r\n    const categoriesTodoLists = document.querySelectorAll('#categories-todo-list li');\r\n    const categoryOptions = document.querySelectorAll('#category option');\r\n\r\n    if (categoryContainers.length === 0) {\r\n        console.warn(\"No categories found.\");\r\n        return;\r\n    }\r\n\r\n    categoryContainers.forEach(container => {\r\n        const deleteButton = container.querySelector('.category-delete');\r\n        const editButton = container.querySelector('.category-edit');\r\n        const addButton = container.querySelector('.category-add-todo');\r\n        const header = container.querySelector('h2');\r\n\r\n        if (!header) return;\r\n\r\n        let currentCategoryName = header.textContent.trim();\r\n\r\n        // Delete Category\r\n        if (deleteButton) {\r\n            deleteButton.addEventListener('click', () => {\r\n                if (confirm('Are you sure you want to delete this category?')) {\r\n                    categoriesTodoLists.forEach(todo => {\r\n                        if (todo.textContent.trim() === currentCategoryName) {\r\n                            todo.remove();\r\n                        }\r\n                    });\r\n        \r\n                    categoryOptions.forEach(option => {\r\n                        if (option.textContent.trim() === currentCategoryName) {\r\n                            option.remove();\r\n                        }\r\n                    });\r\n                    container.remove();\r\n                }\r\n            });\r\n        }\r\n\r\n        // Edit Category\r\n        if (editButton) {\r\n            editButton.addEventListener('click', () => {\r\n                const newCategoryName = prompt('Enter new category name:', currentCategoryName)?.trim().toLowerCase();\r\n        \r\n                if (!newCategoryName) {\r\n                    alert('Please enter a valid category name.');\r\n                    return;\r\n                }\r\n        \r\n                let categoryExists = false;\r\n                categoriesTodoLists.forEach(todo => {\r\n                    if (todo.textContent.trim().toLowerCase() === newCategoryName) {\r\n                        categoryExists = true;\r\n                    }\r\n                });\r\n        \r\n                if (categoryExists) {\r\n                    alert('Category already exists.');\r\n                    return;\r\n                }\r\n        \r\n                const finalValue = newCategoryName.charAt(0).toUpperCase() + newCategoryName.slice(1);\r\n        \r\n                container.className = `container-category${finalValue}`; // Update the class name\r\n        \r\n                // Update header, category list, and options\r\n                header.innerHTML = `<i class='bx bx-hash'></i>${finalValue}`;\r\n        \r\n                categoriesTodoLists.forEach(todo => {\r\n                    if (todo.textContent.trim() === currentCategoryName) {\r\n                        todo.innerHTML = `<i class=\"bx bx-hash\"></i>${finalValue}`;\r\n                    }\r\n                });\r\n        \r\n                categoryOptions.forEach(option => {\r\n                    if (option.textContent.trim() === currentCategoryName) {\r\n                        option.textContent = finalValue;\r\n                        option.value = finalValue;\r\n                    }\r\n                });\r\n        \r\n                currentCategoryName = finalValue; // Update the current category name\r\n            });\r\n        }\r\n\r\n        // Add Task Button\r\n        if (addButton) {\r\n            addButton.addEventListener('click', (e) => {\r\n                e.stopPropagation();\r\n                (0,_showAndHide_js__WEBPACK_IMPORTED_MODULE_0__.showAndHide)(true, true);\r\n            });\r\n        }\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/modules/categoryButtons.js?");

/***/ }),

/***/ "./src/modules/categoryDom.js":
/*!************************************!*\
  !*** ./src/modules/categoryDom.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   categoryDom: () => (/* binding */ categoryDom)\n/* harmony export */ });\n/* harmony import */ var _showAndHide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showAndHide.js */ \"./src/modules/showAndHide.js\");\n\r\n\r\nfunction categoryDom(categoryName) {\r\n    const containerRight = document.querySelector('.container-right');\r\n    const container = document.createElement('div');\r\n    container.className = `container-category${categoryName}`;\r\n\r\n    let currentCategoryName = categoryName; // Mutable reference to keep track of the name\r\n\r\n    const header = document.createElement('h2');\r\n    header.innerHTML = `<i class='bx bx-hash'></i>${currentCategoryName}`;\r\n    container.appendChild(header);\r\n\r\n    const categoryButtons = document.createElement('div');\r\n    categoryButtons.className = 'category-buttons';\r\n\r\n    // Create Buttons\r\n    const deleteButton = document.createElement('button');\r\n    deleteButton.className = 'category-delete';\r\n    deleteButton.innerHTML = \"Delete Category <i class='bx bxs-trash'></i>\";\r\n    categoryButtons.appendChild(deleteButton);\r\n\r\n    const editButton = document.createElement('button');\r\n    editButton.className = 'category-edit';\r\n    editButton.innerHTML = \"Edit Category <i class='bx bxs-edit'></i>\";\r\n    categoryButtons.appendChild(editButton);\r\n\r\n    const addButton = document.createElement('button');\r\n    addButton.className = 'category-add-todo';\r\n    addButton.innerHTML = \"Add A Task <i class='bx bx-plus'></i>\";\r\n    categoryButtons.appendChild(addButton);\r\n\r\n    container.appendChild(categoryButtons);\r\n    containerRight.appendChild(container);\r\n\r\n    const categoriesTodoLists = document.querySelectorAll('#categories-todo-list li');\r\n    const categoryOptions = document.querySelectorAll('#category option');\r\n\r\n    // Button Event Listeners\r\n    deleteButton.addEventListener('click', () => {\r\n        if (confirm('Are you sure you want to delete this category?')) {\r\n            categoriesTodoLists.forEach(todo => {\r\n                if (todo.textContent.trim() === currentCategoryName) {\r\n                    todo.remove();\r\n                }\r\n            });\r\n\r\n            categoryOptions.forEach(option => {\r\n                if (option.textContent.trim() === currentCategoryName) {\r\n                    option.remove();\r\n                }\r\n            });\r\n            container.remove();\r\n        }\r\n    });\r\n\r\n    editButton.addEventListener('click', () => {\r\n        const newCategoryName = prompt('Enter new category name:', currentCategoryName)?.trim().toLowerCase();\r\n\r\n        if (!newCategoryName) {\r\n            alert('Please enter a valid category name.');\r\n            return;\r\n        }\r\n\r\n        let categoryExists = false;\r\n        categoriesTodoLists.forEach(todo => {\r\n            if (todo.textContent.trim().toLowerCase() === newCategoryName) {\r\n                categoryExists = true;\r\n            }\r\n        });\r\n\r\n        if (categoryExists) {\r\n            alert('Category already exists.');\r\n            return;\r\n        }\r\n\r\n        const finalValue = newCategoryName.charAt(0).toUpperCase() + newCategoryName.slice(1);\r\n\r\n        container.className = `container-category${finalValue}`; // Update the class name\r\n\r\n        // Update header, category list, and options\r\n        header.innerHTML = `<i class='bx bx-hash'></i>${finalValue}`;\r\n\r\n        categoriesTodoLists.forEach(todo => {\r\n            if (todo.textContent.trim() === currentCategoryName) {\r\n                todo.innerHTML = `<i class=\"bx bx-hash\"></i>${finalValue}`;\r\n            }\r\n        });\r\n\r\n        categoryOptions.forEach(option => {\r\n            if (option.textContent.trim() === currentCategoryName) {\r\n                option.textContent = finalValue;\r\n                option.value = finalValue;\r\n            }\r\n        });\r\n\r\n        currentCategoryName = finalValue; // Update the current category name\r\n    });\r\n\r\n    addButton.addEventListener('click', (e) => {\r\n        e.stopPropagation();\r\n        (0,_showAndHide_js__WEBPACK_IMPORTED_MODULE_0__.showAndHide)(true, true); \r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/modules/categoryDom.js?");

/***/ }),

/***/ "./src/modules/categorySubmit.js":
/*!***************************************!*\
  !*** ./src/modules/categorySubmit.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   categorySubmit: () => (/* binding */ categorySubmit)\n/* harmony export */ });\n/* harmony import */ var _showAndHide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showAndHide.js */ \"./src/modules/showAndHide.js\");\n/* harmony import */ var _categoryDom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categoryDom.js */ \"./src/modules/categoryDom.js\");\n/* harmony import */ var _setupTodoViewToggle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setupTodoViewToggle.js */ \"./src/modules/setupTodoViewToggle.js\");\n\r\n\r\n\r\n\r\nfunction categorySubmit() {\r\n    const input = document.getElementById('category-input');\r\n    const submitButton = document.querySelector('.category-submit-button');\r\n    const categoriesList = document.getElementById('categories-todo-list');\r\n    const addCategoryOption = document.getElementById('category');\r\n\r\n    submitButton.addEventListener('click', (event) => {\r\n        event.preventDefault();\r\n\r\n        const value = input.value.trim().toLowerCase();\r\n\r\n        if (value === '') {\r\n            alert('Please enter a category');\r\n            return;\r\n        }\r\n\r\n        // Check if the category already exists\r\n        let categoryExists = false;\r\n        categoriesList.querySelectorAll('li').forEach((listItem) => {\r\n            const listItemText = listItem.textContent.trim().toLowerCase();\r\n            if (listItemText === value) {\r\n                categoryExists = true;\r\n            }\r\n        });\r\n\r\n        if (categoryExists) {\r\n            alert('Category already exists');\r\n            return;\r\n        }\r\n\r\n        const finalValue = value.charAt(0).toUpperCase() + value.slice(1);\r\n\r\n        // Create and append the new category item\r\n        const categoryItem = document.createElement('li');\r\n        categoryItem.textContent = finalValue;\r\n\r\n        const icon = document.createElement('i');\r\n        icon.className = 'bx bx-hash';\r\n        categoryItem.prepend(icon);\r\n\r\n        categoriesList.appendChild(categoryItem);\r\n\r\n        // Create and append the new category option\r\n        const categoryOption = document.createElement('option');\r\n        categoryOption.value = finalValue;\r\n        categoryOption.textContent = finalValue;\r\n        addCategoryOption.appendChild(categoryOption);\r\n\r\n        // Create and append the new category container\r\n        (0,_categoryDom_js__WEBPACK_IMPORTED_MODULE_1__.categoryDom)(finalValue);\r\n        \r\n        // Hide the category input container\r\n        (0,_showAndHide_js__WEBPACK_IMPORTED_MODULE_0__.showAndHide)(false, false);\r\n        (0,_setupTodoViewToggle_js__WEBPACK_IMPORTED_MODULE_2__.setupTodoViewToggle)();\r\n        // Clear the input field\r\n        input.value = '';\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/modules/categorySubmit.js?");

/***/ }),

/***/ "./src/modules/iconLi.js":
/*!*******************************!*\
  !*** ./src/modules/iconLi.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   iconLi: () => (/* binding */ iconLi)\n/* harmony export */ });\nfunction iconLi() {\r\n  const categoriesList = document.getElementById('categories-todo-list');\r\n\r\n  categoriesList.querySelectorAll('li').forEach((listItem) => {\r\n    const icon = document.createElement('i');\r\n    icon.className = 'bx bx-hash';\r\n    listItem.prepend(icon);\r\n  });\r\n}\n\n//# sourceURL=webpack:///./src/modules/iconLi.js?");

/***/ }),

/***/ "./src/modules/initializeEventListeners.js":
/*!*************************************************!*\
  !*** ./src/modules/initializeEventListeners.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeEventListeners: () => (/* binding */ initializeEventListeners)\n/* harmony export */ });\n/* harmony import */ var _showAndHide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showAndHide.js */ \"./src/modules/showAndHide.js\");\n\r\n\r\nfunction initializeEventListeners() {\r\n    const addTodoBtn = document.querySelector('.add-todo');\r\n    const closeTodoBtn = document.querySelector('.close-todo');\r\n    const addCategoryBtn = document.querySelector('.add-category');\r\n    const closeCategoryBtn = document.querySelector('.close-category');\r\n\r\n    if (addTodoBtn) {\r\n        addTodoBtn.addEventListener('click', (e) => {\r\n            e.stopPropagation();\r\n            (0,_showAndHide_js__WEBPACK_IMPORTED_MODULE_0__.showAndHide)(true, true);\r\n        });\r\n    }\r\n\r\n    if (closeTodoBtn) {\r\n        closeTodoBtn.addEventListener('click', () => {\r\n            (0,_showAndHide_js__WEBPACK_IMPORTED_MODULE_0__.showAndHide)(false, true);\r\n        });\r\n    }\r\n\r\n    if (addCategoryBtn) {\r\n        addCategoryBtn.addEventListener('click', (e) => {\r\n            e.stopPropagation();\r\n            (0,_showAndHide_js__WEBPACK_IMPORTED_MODULE_0__.showAndHide)(true, false);\r\n        });\r\n    }\r\n\r\n    if (closeCategoryBtn) {\r\n        closeCategoryBtn.addEventListener('click', () => {\r\n            (0,_showAndHide_js__WEBPACK_IMPORTED_MODULE_0__.showAndHide)(false, false);\r\n        });\r\n    }\r\n\r\n    // Attach global click handler for closing containers\r\n    document.addEventListener('click', (e) => {\r\n        const todoContainer = document.querySelector('.todo-list-container');\r\n        const categoryContainer = document.querySelector('.category-container');\r\n\r\n        if (todoContainer?.style.display === 'flex' && !todoContainer.contains(e.target)) {\r\n            (0,_showAndHide_js__WEBPACK_IMPORTED_MODULE_0__.showAndHide)(false, true);\r\n        }\r\n\r\n        if (categoryContainer?.style.display === 'flex' && !categoryContainer.contains(e.target)) {\r\n            (0,_showAndHide_js__WEBPACK_IMPORTED_MODULE_0__.showAndHide)(false, false);\r\n        }\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/modules/initializeEventListeners.js?");

/***/ }),

/***/ "./src/modules/setupCheckedButtons.js":
/*!********************************************!*\
  !*** ./src/modules/setupCheckedButtons.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupCheckedButtons: () => (/* binding */ setupCheckedButtons)\n/* harmony export */ });\n/* harmony import */ var _todoButtons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoButtons.js */ \"./src/modules/todoButtons.js\");\n\r\n\r\nfunction setupCheckedButtons() {\r\n    const checkedButtons = document.querySelectorAll('.checked-todo');\r\n\r\n    // Clean up old listeners before adding new ones\r\n    checkedButtons.forEach(checkButton => {\r\n        checkButton.replaceWith(checkButton.cloneNode(true));\r\n    });\r\n\r\n    document.querySelectorAll('.checked-todo').forEach(checkedButton => {\r\n        checkedButton.addEventListener('click', event => {\r\n            event.stopPropagation(); // Prevent parent click event\r\n            const todoFull = checkedButton.parentElement.parentElement;\r\n            const id = todoFull?.getAttribute('data-id');\r\n            if (id) {\r\n                const confirmChecked = confirm('Are you sure you finished this?');\r\n                if (confirmChecked) (0,_todoButtons_js__WEBPACK_IMPORTED_MODULE_0__.deleteTodo)(id);\r\n            }\r\n        });\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/modules/setupCheckedButtons.js?");

/***/ }),

/***/ "./src/modules/setupDeleteIcons.js":
/*!*****************************************!*\
  !*** ./src/modules/setupDeleteIcons.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupDeleteIcons: () => (/* binding */ setupDeleteIcons)\n/* harmony export */ });\n/* harmony import */ var _todoButtons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoButtons.js */ \"./src/modules/todoButtons.js\");\n\r\n\r\nfunction setupDeleteIcons() {\r\n    const deleteIcons = document.querySelectorAll('.delete-todo');\r\n\r\n    // Clean up old listeners before adding new ones\r\n    deleteIcons.forEach(icon => {\r\n        icon.replaceWith(icon.cloneNode(true));\r\n    });\r\n\r\n    document.querySelectorAll('.delete-todo').forEach(deleteIcon => {\r\n        deleteIcon.addEventListener('click', event => {\r\n            event.stopPropagation(); // Prevent parent click event\r\n            const todoFull = deleteIcon.parentElement.parentElement.parentElement;\r\n            const id = todoFull?.getAttribute('data-id');\r\n            if (id) {\r\n                const confirmDelete = confirm('Are you sure you want to delete this todo?');\r\n                if (confirmDelete) (0,_todoButtons_js__WEBPACK_IMPORTED_MODULE_0__.deleteTodo)(id);\r\n            }\r\n        });\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/modules/setupDeleteIcons.js?");

/***/ }),

/***/ "./src/modules/setupEditIcons.js":
/*!***************************************!*\
  !*** ./src/modules/setupEditIcons.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupEditIcons: () => (/* binding */ setupEditIcons)\n/* harmony export */ });\n/* harmony import */ var _todoButtons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoButtons.js */ \"./src/modules/todoButtons.js\");\n\r\n\r\nfunction setupEditIcons() {\r\n    const editIcons = document.querySelectorAll('.edit-todo');\r\n\r\n    // Clean up old listeners before adding new ones\r\n    editIcons.forEach(icon => {\r\n        icon.replaceWith(icon.cloneNode(true));\r\n    });\r\n\r\n    document.querySelectorAll('.edit-todo').forEach(editIcon => {\r\n        editIcon.addEventListener('click', event => {\r\n            event.stopPropagation(); // Prevent parent click event\r\n            const todoFull = editIcon.parentElement.parentElement.parentElement;\r\n            const id = todoFull?.getAttribute('data-id');\r\n            if (id) (0,_todoButtons_js__WEBPACK_IMPORTED_MODULE_0__.editTodo)(id);\r\n        });\r\n    });\r\n}\n\n//# sourceURL=webpack:///./src/modules/setupEditIcons.js?");

/***/ }),

/***/ "./src/modules/setupTodoExpand.js":
/*!****************************************!*\
  !*** ./src/modules/setupTodoExpand.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupTodoExpand: () => (/* binding */ setupTodoExpand)\n/* harmony export */ });\n/* harmony import */ var _todoButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoButtons */ \"./src/modules/todoButtons.js\");\n/* harmony import */ var _setupEditIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setupEditIcons */ \"./src/modules/setupEditIcons.js\");\n/* harmony import */ var _setupDeleteIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setupDeleteIcons */ \"./src/modules/setupDeleteIcons.js\");\n/* harmony import */ var _setupCheckedButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setupCheckedButtons */ \"./src/modules/setupCheckedButtons.js\");\n\r\n\r\n\r\n\r\n\r\nfunction setupTodoExpand(container) {\r\n    if (!container) return;\r\n\r\n    const classNames = container.className.split('-');\r\n    if (classNames.length > 1) {\r\n        const containerCategory = classNames.pop();\r\n        const todoFulls = container.querySelectorAll(`.todo-full-${containerCategory}`);\r\n\r\n        // Remove existing event listeners if any by cloning the node\r\n        todoFulls.forEach(todoFull => {\r\n            const cloned = todoFull.cloneNode(true);\r\n            todoFull.parentNode.replaceChild(cloned, todoFull);\r\n        });\r\n\r\n        const refreshedTodoFulls = container.querySelectorAll(`.todo-full-${containerCategory}`);\r\n\r\n        refreshedTodoFulls.forEach(todoFull => {\r\n            const todo = todoFull.querySelector(`.todo-${containerCategory}`);\r\n            const chevron = todo.querySelector(`.todo-icons-${containerCategory} i:last-child`);\r\n            const description = todoFull.querySelector('.todo-description');\r\n\r\n            const editIcons = todoFull.querySelectorAll('.edit-todo');\r\n            const deleteIcons = todoFull.querySelectorAll('.delete-todo');\r\n            const checkedButtons = todoFull.querySelectorAll('.checked-todo');\r\n\r\n            if(editIcons) {\r\n                (0,_setupEditIcons__WEBPACK_IMPORTED_MODULE_1__.setupEditIcons)();\r\n            }\r\n\r\n            if(deleteIcons) {\r\n                (0,_setupDeleteIcons__WEBPACK_IMPORTED_MODULE_2__.setupDeleteIcons)();\r\n            }\r\n\r\n            if(checkedButtons) {\r\n                (0,_setupCheckedButtons__WEBPACK_IMPORTED_MODULE_3__.setupCheckedButtons)();\r\n            }\r\n\r\n            todoFull.addEventListener('click', () => {\r\n                refreshedTodoFulls.forEach(otherTodoFull => {\r\n                    const otherTodo = otherTodoFull.querySelector(`.todo-${containerCategory}`);\r\n                    const otherChevron = otherTodo.querySelector(`.todo-icons-${containerCategory} i:last-child`);\r\n                    const otherDescription = otherTodoFull.querySelector('.todo-description');\r\n\r\n                    if (otherTodoFull !== todoFull) {\r\n                        otherChevron.className = 'bx bxs-chevron-left';\r\n                        otherTodo.style.height = 'auto';\r\n                        otherDescription.style.display = 'none';\r\n                    }\r\n                });\r\n\r\n                // Toggle the clicked todo\r\n                if (chevron.className === 'bx bxs-chevron-left') {\r\n                    chevron.className = 'bx bxs-chevron-down';\r\n                    // description.textContent = todo.dataset.description || 'There is no description.';\r\n                    description.style.display = 'block';\r\n                } else {\r\n                    chevron.className = 'bx bxs-chevron-left';\r\n                    description.style.display = 'none';\r\n                }\r\n            });\r\n        });\r\n    } else {\r\n        console.error('Unexpected container class structure:', container.className);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/modules/setupTodoExpand.js?");

/***/ }),

/***/ "./src/modules/setupTodoViewToggle.js":
/*!********************************************!*\
  !*** ./src/modules/setupTodoViewToggle.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupTodoViewToggle: () => (/* binding */ setupTodoViewToggle)\n/* harmony export */ });\n/* harmony import */ var _setupTodoExpand_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setupTodoExpand.js */ \"./src/modules/setupTodoExpand.js\");\n\r\n\r\nfunction setupTodoViewToggle() {\r\n    \r\n    const dateListItems = document.querySelectorAll('#date-todo-list li');\r\n    const categoryListItems = document.querySelectorAll('#categories-todo-list li');\r\n    const containers = document.querySelectorAll('.container-right > div');\r\n\r\n    function handleDateClick(event) {\r\n        const clickedText = event.target.textContent.trim().toLowerCase();\r\n\r\n        // Hide all containers\r\n        containers.forEach(container => {\r\n            container.style.display = 'none';\r\n        });\r\n\r\n        // Show the corresponding container\r\n        const targetContainer = document.querySelector(`.container-${clickedText}`);\r\n        if (targetContainer) {\r\n            targetContainer.style.display = 'flex';\r\n            (0,_setupTodoExpand_js__WEBPACK_IMPORTED_MODULE_0__.setupTodoExpand)(targetContainer);\r\n        }\r\n        \r\n    }\r\n\r\n    function handleCategoryClick(event) {\r\n        const clickedCategory = event.target.textContent.trim();\r\n\r\n        // Hide all containers\r\n        containers.forEach(container => {\r\n            container.style.display = 'none';\r\n        });\r\n\r\n        // Show the category container\r\n        const categoryContainer = document.querySelector(`.container-category${clickedCategory}`);\r\n        if (categoryContainer) {\r\n            categoryContainer.style.display = 'flex';\r\n            (0,_setupTodoExpand_js__WEBPACK_IMPORTED_MODULE_0__.setupTodoExpand)(categoryContainer);\r\n        }\r\n    }\r\n\r\n    // Add event listeners for date and category list items\r\n    dateListItems.forEach(item => {\r\n        item.addEventListener('click', handleDateClick);\r\n    });\r\n\r\n    categoryListItems.forEach(item => {\r\n        item.addEventListener('click', handleCategoryClick);\r\n    });\r\n\r\n    // Initialize for the first visible container\r\n    const firstVisibleContainer = Array.from(containers).find(\r\n        container => window.getComputedStyle(container).display === 'flex'\r\n    );\r\n    if (firstVisibleContainer) {\r\n        (0,_setupTodoExpand_js__WEBPACK_IMPORTED_MODULE_0__.setupTodoExpand)(firstVisibleContainer);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/modules/setupTodoViewToggle.js?");

/***/ }),

/***/ "./src/modules/showAndHide.js":
/*!************************************!*\
  !*** ./src/modules/showAndHide.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showAndHide: () => (/* binding */ showAndHide)\n/* harmony export */ });\n/* harmony import */ var _todayDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todayDate.js */ \"./src/modules/todayDate.js\");\n\r\n\r\nfunction showAndHide(show, todo) {\r\n    const container = document.querySelector('.container');\r\n    const todoContainer = document.querySelector('.todo-list-container');\r\n    const category = document.querySelector('.category-container');\r\n    (0,_todayDate_js__WEBPACK_IMPORTED_MODULE_0__.todayDate)();\r\n\r\n  if(show && todo) {\r\n    container.classList.add('opacity');\r\n    todoContainer.style.display = 'flex';\r\n  } else if (!show && todo) {\r\n    container.classList.remove('opacity');\r\n    todoContainer.style.display = 'none';\r\n  } else if (show && !todo) {\r\n    container.classList.add('opacity');\r\n    category.style.display = 'flex';\r\n  } else {\r\n    container.classList.remove('opacity');\r\n    category.style.display = 'none';\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/modules/showAndHide.js?");

/***/ }),

/***/ "./src/modules/todayDate.js":
/*!**********************************!*\
  !*** ./src/modules/todayDate.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   todayDate: () => (/* binding */ todayDate)\n/* harmony export */ });\nfunction todayDate() {\r\n        const dateInput = document.getElementById('date');\r\n        const today = new Date().toISOString().split('T')[0];\r\n        dateInput.value = today;\r\n}\n\n//# sourceURL=webpack:///./src/modules/todayDate.js?");

/***/ }),

/***/ "./src/modules/todoButtons.js":
/*!************************************!*\
  !*** ./src/modules/todoButtons.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo),\n/* harmony export */   editTodo: () => (/* binding */ editTodo)\n/* harmony export */ });\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.js */ \"./src/app.js\");\n\r\n\r\nfunction editTodo(id) {\r\n    const todos = (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.getTodos)();\r\n    const todoIndex = todos.findIndex(t => String(t.id) === String(id));\r\n    \r\n    if (todoIndex === -1) {\r\n        console.warn(`Todo with id ${id} not found`);\r\n        return;\r\n    }\r\n\r\n    const todoToEdit = todos[todoIndex];\r\n\r\n    const newTitle = prompt('Edit title', todoToEdit.title) || todoToEdit.title;\r\n    const newDescription = prompt('Edit description', todoToEdit.description) || todoToEdit.description;\r\n\r\n    // Directly update the todo\r\n    todoToEdit.title = newTitle;\r\n    todoToEdit.description = newDescription;\r\n\r\n    // Update the UI\r\n    updateTodoInContainers(todoToEdit);\r\n}\r\n\r\nfunction updateTodoInContainers(todo) {\r\n    const todoElements = document.querySelectorAll(`[data-id=\"${todo.id}\"]`);\r\n    todoElements.forEach(element => {\r\n        const titleElement = element.querySelector('h3');\r\n        const descriptionElement = element.querySelector('p');\r\n\r\n        if (titleElement) titleElement.textContent = todo.title;\r\n        if (descriptionElement) descriptionElement.textContent = todo.description;\r\n    });\r\n}\r\n\r\n////// delete todo //////\r\n\r\nfunction deleteTodo(id) {\r\n    let todos = (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.getTodos)();\r\n\r\n    // Find and delete the todo by filtering it out\r\n    todos = todos.filter(todo => String(todo.id) !== String(id));\r\n\r\n    // Update the UI\r\n    removeTodoFromContainers(id);\r\n}\r\n\r\nfunction removeTodoFromContainers(id) {\r\n    const todoElements = document.querySelectorAll(`[data-id=\"${id}\"]`);\r\n    todoElements.forEach(element => {\r\n        element.remove(); // Remove the element from the DOM\r\n    });\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/todoButtons.js?");

/***/ }),

/***/ "./src/modules/todoDom.js":
/*!********************************!*\
  !*** ./src/modules/todoDom.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   todoDom: () => (/* binding */ todoDom)\n/* harmony export */ });\nfunction todoDom(id, type, title, description, dueDate, category) {\r\n    const todoContainer = document.createElement('div');\r\n    todoContainer.className = `todo-full-${type}`;\r\n\r\n    todoContainer.dataset.id = id;\r\n\r\n    const todoType = document.createElement('div');\r\n    todoType.className = `todo-${type}`;\r\n\r\n    const checkbox = document.createElement('input');\r\n    checkbox.type = 'checkbox';\r\n    // checkbox.className = `todo-${type}-checkbox`;\r\n    checkbox.className = 'checked-todo';\r\n\r\n    const titleElement = document.createElement('h3');\r\n    titleElement.textContent = title;\r\n\r\n    const categoryElement = document.createElement('h4');\r\n    categoryElement.className = 'category-name';\r\n    categoryElement.textContent = category;\r\n\r\n    const dateElement = document.createElement('span');\r\n    dateElement.className = `todo-date-${type}`;\r\n    const date = new Date(dueDate);\r\n    const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;\r\n    dateElement.textContent = formattedDate;\r\n\r\n    const iconsContainer = document.createElement('div');\r\n    iconsContainer.className = `todo-icons-${type}`;\r\n\r\n    const editIcon = document.createElement('i');\r\n    editIcon.className = 'bx bxs-edit edit-todo';\r\n\r\n    const trashIcon = document.createElement('i');\r\n    trashIcon.className = 'bx bxs-trash delete-todo';\r\n\r\n    const chevronIcon = document.createElement('i');\r\n    chevronIcon.className = 'bx bxs-chevron-left';\r\n\r\n    iconsContainer.appendChild(editIcon);\r\n    iconsContainer.appendChild(trashIcon);\r\n    iconsContainer.appendChild(chevronIcon);\r\n\r\n    todoType.appendChild(checkbox);\r\n    todoType.appendChild(titleElement);\r\n    todoType.appendChild(categoryElement);\r\n    todoType.appendChild(dateElement);\r\n    todoType.appendChild(iconsContainer);\r\n\r\n    const descriptionElement = document.createElement('p');\r\n    descriptionElement.className = 'todo-description';\r\n    descriptionElement.textContent = description;\r\n\r\n    todoContainer.appendChild(todoType);\r\n    todoContainer.appendChild(descriptionElement);\r\n\r\n    return todoContainer;\r\n}\n\n//# sourceURL=webpack:///./src/modules/todoDom.js?");

/***/ }),

/***/ "./src/modules/todoSubmit.js":
/*!***********************************!*\
  !*** ./src/modules/todoSubmit.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   todoSubmit: () => (/* binding */ todoSubmit)\n/* harmony export */ });\n/* harmony import */ var _showAndHide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showAndHide.js */ \"./src/modules/showAndHide.js\");\n/* harmony import */ var _todoDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoDom */ \"./src/modules/todoDom.js\");\n/* harmony import */ var _setupTodoExpand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setupTodoExpand */ \"./src/modules/setupTodoExpand.js\");\n/* harmony import */ var _whichContainerIsOpen_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./whichContainerIsOpen.js */ \"./src/modules/whichContainerIsOpen.js\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.js */ \"./src/app.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction todoSubmit() {\r\n    const contianerToday = document.querySelector('.container-today');\r\n    const containerWeek = document.querySelector('.container-week');\r\n    const containerUpcoming = document.querySelector('.container-upcoming');\r\n    \r\n    document.getElementById('add-todo-btn').addEventListener('click', (event) => {\r\n        event.preventDefault();\r\n\r\n        // Get form inputs\r\n        const titleInput = document.getElementById('todo-input');\r\n        const categorySelect = document.getElementById('category');\r\n        const dateInput = document.getElementById('date');\r\n        const descriptionInput = document.getElementById('description');\r\n\r\n        const title = titleInput.value.trim();\r\n        const category = categorySelect.value;\r\n        const description = descriptionInput.value.trim() || 'There is no description.';\r\n        const date = new Date(dateInput.value);\r\n        const today = new Date();\r\n        \r\n        // Ensure today's time is midnight for comparison\r\n        today.setHours(0, 0, 0, 0);\r\n\r\n        // Validate title input\r\n        if (title === \"\") {\r\n            alert(\"Please enter a title for your todo.\");\r\n            return;\r\n        }\r\n\r\n        // Validate category selection\r\n        // if (!category) {\r\n        //     alert(\"Please select a category.\");\r\n        //     return;\r\n        // }\r\n\r\n        // Validate date\r\n        if (isNaN(date.getTime())) {\r\n            alert(\"Please select a valid date.\");\r\n            return;\r\n        }\r\n\r\n        if (date < today) {\r\n            alert(\"Please choose a date that is today or in the future.\");\r\n            return;\r\n        }\r\n\r\n        // Unique ID for each todo\r\n        const id = Date.now();\r\n\r\n        // Add to date-specific containers\r\n        const oneDayInMs = 24 * 60 * 60 * 1000;\r\n        const diffInDays = Math.round((date - today) / oneDayInMs);\r\n\r\n        const newTodo = { id, title, description, date, category };\r\n\r\n        (0,_app_js__WEBPACK_IMPORTED_MODULE_4__.addTodo)(newTodo);\r\n\r\n        if (diffInDays === 0) {\r\n            // todayContainer.appendChild(todoItem.cloneNode(true));\r\n            const todoToday = (0,_todoDom__WEBPACK_IMPORTED_MODULE_1__.todoDom)(id, 'today', title, description, date, category);\r\n            contianerToday.appendChild(todoToday);\r\n\r\n            const todoWeek = (0,_todoDom__WEBPACK_IMPORTED_MODULE_1__.todoDom)(id, 'week', title, description, date, category);\r\n            containerWeek.appendChild(todoWeek);\r\n\r\n            const todoUpcoming = (0,_todoDom__WEBPACK_IMPORTED_MODULE_1__.todoDom)(id, 'upcoming', title, description, date, category);\r\n            containerUpcoming.appendChild(todoUpcoming);\r\n\r\n        } else if (diffInDays > 0 && diffInDays <= 7) {\r\n            const todoWeek = (0,_todoDom__WEBPACK_IMPORTED_MODULE_1__.todoDom)(id, 'week', title, description, date, category);\r\n            containerWeek.appendChild(todoWeek);\r\n\r\n            const todoUpcoming = (0,_todoDom__WEBPACK_IMPORTED_MODULE_1__.todoDom)(id, 'upcoming', title, description, date, category);\r\n            containerUpcoming.appendChild(todoUpcoming);\r\n            // weekContainer.appendChild(todoItem.cloneNode(true));\r\n\r\n        } else if (diffInDays > 7) {\r\n            // upcomingContainer.appendChild(todoItem.cloneNode(true));\r\n            const todoUpcoming = (0,_todoDom__WEBPACK_IMPORTED_MODULE_1__.todoDom)(id, 'upcoming', title, description, date, category);\r\n            containerUpcoming.appendChild(todoUpcoming);\r\n        }\r\n\r\n        if (category) {\r\n            const todoCategory = (0,_todoDom__WEBPACK_IMPORTED_MODULE_1__.todoDom)(id, `category${category}`, title, description, date, category);\r\n            \r\n            const categoryContainer = document.querySelector(`.container-category${category}`);\r\n            categoryContainer.appendChild(todoCategory);\r\n        }\r\n\r\n        (0,_showAndHide_js__WEBPACK_IMPORTED_MODULE_0__.showAndHide)(false, true);\r\n\r\n        (0,_setupTodoExpand__WEBPACK_IMPORTED_MODULE_2__.setupTodoExpand)((0,_whichContainerIsOpen_js__WEBPACK_IMPORTED_MODULE_3__.whichContainerIsOpen)());\r\n        \r\n        // Reset the form\r\n        titleInput.value = \"\";\r\n        descriptionInput.value = \"\";\r\n        dateInput.value = \"\";\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/modules/todoSubmit.js?");

/***/ }),

/***/ "./src/modules/whichContainerIsOpen.js":
/*!*********************************************!*\
  !*** ./src/modules/whichContainerIsOpen.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   whichContainerIsOpen: () => (/* binding */ whichContainerIsOpen)\n/* harmony export */ });\nfunction whichContainerIsOpen() {\r\n    const containers = document.querySelectorAll('.container-right > div');\r\n\r\n    const firstVisibleContainer = Array.from(containers).find(\r\n        container => window.getComputedStyle(container).display === 'flex'\r\n    );\r\n\r\n    if (firstVisibleContainer) {\r\n        return firstVisibleContainer;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/modules/whichContainerIsOpen.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;