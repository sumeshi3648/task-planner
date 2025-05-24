document.addEventListener('DOMContentLoaded', () => {
    const newTodoInput = document.querySelector('.new-todo');
    const tasksList = document.querySelector('.tasks-list');
    const body = document.body;
    const themeToggleImg = document.getElementById('theme-toggle-img');

    function handleCheckboxChange(event) {
        const todoItem = event.target.closest('.todo-item');
        if(event.target.checked) {
            todoItem.classList.add('completed');
        } else {
            todoItem.classList.remove('completed');
        }
    }

    function createTodoItem(text) {
        const listItem = document.createElement('li');
        listItem.classList.add('todo-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', handleCheckboxChange);
        
        const span = document.createElement('span');
        span.textContent = text;

        const img = document.createElement('img');
        img.src = "assets/delete.png";
        img.alt = "Delete todo item";
        img.addEventListener('click', handleDeleteClick);

        listItem.appendChild(checkbox);
        listItem.appendChild(span);
        listItem.appendChild(img);
        tasksList.appendChild(listItem);
    }

    function handleDeleteClick(event) {
        const todoItemToDelete = event.target.closest('.todo-item');
        if (todoItemToDelete) {
            tasksList.removeChild(todoItemToDelete);
        }
    }

    function toggleTheme() {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode')
            themeToggleImg.src = 'assets/moon.png';
            themeToggleImg.alt = 'toggle dark mode';
        } else {
            body.classList.add('dark-mode')
            themeToggleImg.src = 'assets/sun.png';
            themeToggleImg.alt = 'toggle light mode';
        }
    }

    themeToggleImg.addEventListener('click', toggleTheme);

    newTodoInput.addEventListener('keydown', (event) => {
        if (event.key === "Enter") {
            const todoText = newTodoInput.value.trim();

            if (todoText !== '') {
                createTodoItem(todoText);
                newTodoInput.value = '';
            }
        }
    });
});