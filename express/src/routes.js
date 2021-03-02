const express = require('express');
const routes = express.Router();

const TodoController = require('./controllers/TodoController');

//Todos
routes.get('/todo', TodoController.index );
routes.post('/todo', TodoController.store );
routes.get('/todo/:todo_id', TodoController.show );
routes.put('/todo/:todo_id', TodoController.update );
routes.delete('/todo/:todo_id', TodoController.destroy );

module.exports = routes;
