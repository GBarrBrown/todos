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

function createTodo(todo, testDb) {
    const db = testDb || connection

    return db('todos').insert(todo)
}

function getTodosByPriority(priority, testDb) {
    const db = testDb || connection

    return db('todos').where('priority', priority)
}
