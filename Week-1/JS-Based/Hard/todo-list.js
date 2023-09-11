class Todo {
    constructor() {
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(index) {
        if (index >= this.todos.length) {
            throw new Error("Cannot remove from index " + index);
        }
        this.todos.splice(index, 1);
    }
    

    updateTodo(index, updatedTodo) {
        this.todos[index] = updatedTodo;
    }

    getAll() {
        return this.todos;
    }

    getTodo(index) {
        return this.todos[index];
    }

    clear() {
        this.todos = [];
    }
}

module.exports = Todo;