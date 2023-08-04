function afterLoad() {
    let todoItems = [];

    function renderTodo(todo) {
        const list = document.querySelector('.js-todo-list');
        const isChecked = todo.checked ? 'done' : '';
        const node = document.createElement("li");
        node.setAttribute('class', `todo-item ${isChecked}`);
        node.setAttribute('data-key', todo.id);
        node.innerHTML = `
            <input type="checkbox" id="${todo.id}"/>
            <label for="${todo.id}" class="tick js-tick"></label>
            <span>${todo.text}</span>
            <button class="delete-todo js-delete-todo">
            <svg><use href="#delete-icon"></use></svg>
            </button>`;
        list.append(node);
    }

    function addTodo(text) {
        const todo = {
            text,
            checked: false,
            id: Date.now() // ms elapsed since 1 Jan, 1970
        }
        todoItems.push(todo);
        renderTodo(todo);
    }

    const form = document.querySelector('.js-form');
    form.addEventListener('submit', event => {
        //prevent page refresh on form submission
        event.preventDefault();
        const input = document.querySelector('.js-todo-input');
        const text = input.value.trim();
        if (text !== '') {
            addTodo(text);
            input.value = '';
            input.focus();
        }
    });
}

window.onload = afterLoad;