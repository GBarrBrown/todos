const connection = require('./connection')

module.exports = {
    getTodos,
    createTodo,
    getTodosByPriority
}

function getTodos(testDb) {
    const db = testDb || connection

    return db('todos')
}

function createTodo(newTodo, testDb) {
    const db = testDb || connection

    return db('todos').insert(newTodo)
}

function getTodosByPriority(priority, testDb) {
    const db = testDb || connection

    return db('todos').where('priority', priority)
}
