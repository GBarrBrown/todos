const express = require('express')
const router = express.Router()
const {getTodos, getTodosByPriority} = require('../db/todos')

// GET /api/v1/todos
router.get('/', (req, res) => {
    getTodos()
    .then((todos) => {
        res.json(todos)
    })
    .catch((err) => {
        console.log(err)
        res.status(500).json({error: 'Somethingwent wrong'})
    })
})

// POST /api/v1/todos
router.post('/', (req, res) => {
    
})

// // GET /api/v1/priority/:priority
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