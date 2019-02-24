const express = require('express')
const router = express.Router()

// GET /api/v1/todos
router.get('/', (req, res) => {
    res.json([
        {
            task: "task name",
            priority: 5,
            category: "testing api",
            is_completed: false,
            due_at: 1551045402559
        }
    ])

})

// POST /api/v1/todos
router.post('/', (req, res) => {
    
})

// // GET /api/v1/priority/:priority
// router.get('/:priority', (req, res) => {
    
// })

// // GET /api/v1/category/:category
// router.get('/:category', (req, res) => {
    
// })

// // GET /api/v1/complete/:is_completed
// router.get('/:is_completed', (req, res) => {
    
// })


module.exports = router