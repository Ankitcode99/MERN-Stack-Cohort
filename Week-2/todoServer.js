const express = require('express');
const bodyParser = require('body-parser');
const {v4: uuidv4} = require('uuid');
const app = express();
app.use(bodyParser.json());

let todos = [];;

app.get('/', (req, res) => {
    res.status(200).json(todos);
})

app.get('/:id', (req,res)=>{
    const idd = parseInt(req.params.id);
    const todo = todos.find(todo => todo.id === idd)
    if(!todo){
        res.status(404).send()
    }else{
        res.status(200).json(todo);
    }
})

app.post('/', (req, res) => {
    const newTodo = {
        id: Math.floor(Math.random() * 1000000),
        title: req.body.title,
        description: req.body.description
    }
    todos.push(newTodo);
    res.status(201).json(newTodo);
})

app.put('/:id', (req,res) => {
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(req.params.id))
    if(todoIndex === -1){
        res.status(404).send();
    }else{
        todos[todoIndex].title = req.body.title;
        todos[todoIndex].description = req.body.description;
        res.status(200).json(todos[todoIndex]);
    }
})

app.delete('/:id', (req,res) => {
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(req.params.id))
    if(todoIndex === -1){
        res.status(404)
    }else{
        todos.splice(todoIndex, 1);
        res.status(204).send();
    }
})

app.use((req, res, next)=>{
    res.status(404).json({
        "message": "Looks like you're lost"
    })
})


module.exports = app;