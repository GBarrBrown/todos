const express = require('express')
const router = express.Router()
const {getTodos, getTodosByPriority, createTodo} = require('../db/todos')

// GET /api/v1/todos
router.get('/', (req, res) => {
    getTodos()
    .then((todos) => {
        res.json(todos)
    })
    .catch((err) => {
        console.log(err)
        res.status(500).json({error: 'Something went wrong'})
    })
})

// POST /api/v1/todos
router.post('/', (req, res) => {
    const newTodo = {
        task: req.body.task,
        priority: req.body.priority,
        category: req.body.category,
        is_completed: req.body.is_completed,
        due_at: req.body.due_at
    }
    createTodo(newTodo)
    // [id] grabs id[0] from the array of id's that is returned
    .then(([id]) => {
        res.json({ id })
    })
    .catch((err) => {
        console.log(err)
        res.status(500).json({error: 'Something went wrong'})
    })
})

// GET /api/v1/priority/:priority
router.get('/:priority', (req, res) => {
    const priority = req.params.priority
    getTodosByPriority(priority)
    .then((todos) => {
        res.json(todos)
    })
    .catch((err) => {
        console.log(err)
        res.status(500).json({error: 'Somethingwent wrong'})
    })
})

// // GET /api/v1/category/:category
// router.get('/:category', (req, res) => {
    
// })

// // GET /api/v1/complete/:is_completed
// router.get('/:is_completed', (req, res) => {
    
// })


module.exports = router