document.addEventListener('DOMContentLoaded', () => {
    const newTodoInput = document.querySelector('.new-todo');
    const tasksList = document.querySelector('.tasks-list');
    const body = document.body;
    const themeToggleImg = document.getElementById('theme-toggle-img');
    var numOfTasks = 0;
    const itemsLeftText = document.getElementById("items-left");
    itemsLeftText.textContent = `${numOfTasks} items left`;
    console.log(numOfTasks);

    function handleCheckboxChange(event) {
        const todoItem = event.target.closest('.todo-item');
        if(event.target.checked) {
            todoItem.classList.add('completed');
            numOfTasks -= 1;
            updateItemsLeft(numOfTasks);
        } else {
            todoItem.classList.remove('completed');
            numOfTasks += 1;
            updateItemsLeft(numOfTasks);
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
        img.src = "assets/icon-cross.svg";
        img.alt = "Delete todo item";
        img.addEventListener('click', handleDeleteClick);

        listItem.appendChild(checkbox);
        listItem.appendChild(span);
        listItem.appendChild(img);
        tasksList.appendChild(listItem);
        numOfTasks += 1;
        console.log(numOfTasks);
        updateItemsLeft(numOfTasks);
    }

    function handleDeleteClick(event) {
        const todoItemToDelete = event.target.closest('.todo-item');
        if (todoItemToDelete) {
            const checkbox = todoItemToDelete.querySelector('input[type = "checkbox"]');
            if (checkbox && !checkbox.checked) {
                numOfTasks -= 1;
                updateItemsLeft(numOfTasks);
            }
            tasksList.removeChild(todoItemToDelete);
        }
    }

    function updateItemsLeft(count) {
        const itemsLeftText = document.getElementById("items-left");
        itemsLeftText.textContent = `${count} items left`;
    }


    function toggleTheme() {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode')
            themeToggleImg.src = 'assets/icon-moon.svg';
            themeToggleImg.alt = 'toggle dark mode';
        } else {
            body.classList.add('dark-mode')
            themeToggleImg.src = 'assets/icon-sun.svg';
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