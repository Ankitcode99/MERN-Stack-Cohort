const assert = require('assert'); // Assuming you're using Node.js assert module
const Todo = require('../Hard/todo-list'); //

describe('Todo List Test Suite', () => {
    let todoList;

    beforeEach(() => {
        todoList = new Todo();
    });

    it('should add a todo', () => {
        todoList.addTodo('Buy groceries');
        assert.strictEqual(todoList.getAll().length, 1);
    });

    it('should remove a todo by index', () => {
        todoList.addTodo('Buy groceries');
        todoList.removeTodo(0);
        assert.strictEqual(todoList.getAll().length, 0);
    });

    it('should throw an error when trying to remove from an invalid index', () => {
        assert.throws(() => {
            todoList.removeTodo(0);
        }, { message: 'Cannot remove from index 0' });
    });
    
    

    it('should update a todo by index', () => {
        todoList.addTodo('Buy groceries');
        todoList.updateTodo(0, 'Buy fruits');
        assert.strictEqual(todoList.getTodo(0), 'Buy fruits');
    });

    it('should get all todos', () => {
        todoList.addTodo('Buy groceries');
        todoList.addTodo('Go to the gym');
        assert.deepStrictEqual(todoList.getAll(), ['Buy groceries', 'Go to the gym']);
    });

    it('should get a todo by index', () => {
        todoList.addTodo('Buy groceries');
        todoList.addTodo('Go to the gym');
        assert.strictEqual(todoList.getTodo(1), 'Go to the gym');
    });

    it('should clear all todos', () => {
        todoList.addTodo('Buy groceries');
        todoList.addTodo('Go to the gym');
        todoList.clear();
        assert.strictEqual(todoList.getAll().length, 0);
    });

    it('should perform a full set of operations', () => {
        todoList.addTodo('Buy groceries');
        todoList.addTodo('Go to the gym');
        todoList.updateTodo(0, 'Buy fruits');
        todoList.removeTodo(1);
        assert.deepStrictEqual(todoList.getAll(), ['Buy fruits']);
    });
});
