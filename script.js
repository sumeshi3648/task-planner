document.addEventListener('DOMContentLoaded', () => {
    const newTodoInput = document.querySelector('.new-todo');
    const tasksList = document.querySelector('.tasks-list');
    const checkboxes = document.querySelectorAll('.todo-item input[type="checkbox"]');

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

        listItem.appendChild(checkbox);
        listItem.appendChild(span);
        tasksList.appendChild(listItem);
    }

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