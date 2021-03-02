const Todo = require("../models/Todo");

module.exports = {
    async index(req, res) {
        try {
            const todo = await Todo.findAll();
            return res.json(todo)
        } catch (error) {
            console.error('something error ==>', error);
            return res.json(error);
        }
    },

    async store(req, res) {
        const { title, description } = req.body;
        try{
            const todo = await Todo.create({
                title,
                description,
            });
            return res.json(todo);
        } catch (error) {
            return res.json(error);
        }
    },

    async show(req, res) {
        const { todo_id } = req.params;
        const todo = await Todo.findByPk(todo_id);

        if(!todo) {
            return res.status(404).json({ error: "Todo not found" })
        }

        return res.json(todo);        
    },

    async update(req, res) {
        const { todo_id } = req.params;
        const { title, description } = req.body;

        const todo = await Task.findByPk(todo_id);

        if(!todo) {
            return res.status(404).json({ error: "Todo not found" })
        }

        todo.title = title;
        todo.description = description;

        await todo.save();

        return res.json(todo);        
    },

    async destroy(req, res) {
        const { todo_id } = req.params;
        const todo = await Todo.findByPk(todo_id);

        if(!todo) {
            return res.status(404).json({ error: "Todo not found" })
        }

        await todo.destroy();
        return res.json({ message: "Todo successfully deleted!" });        
    }
};