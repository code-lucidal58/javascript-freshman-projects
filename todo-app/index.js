function afterLoad() {
    let todoItems = [];
    function addTodo(text) {
        const todo = {
            text,
            checked: false,
            id: Date.now() // ms elapsed since 1 Jan, 1970
        }
        todoItems.push(todo);
        console.log(todoItems);
    }
    const  form = document.querySelector('.js-form');
    form.addEventListener('submit', event => {
        //prevent page refresh on form submission
        event.preventDefault();
        const input = document.querySelector('.js-todo-input');
        const text = input.value.trim();
        if (text!=='') {
            addTodo(text);
            input.value = '';
            input.focus();
        }
    });
}

window.onload = afterLoad;