
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'Get Bread', priority: 1, category: 'Home', is_completed: false, due_at:1551048017233},
        {id: 2, task: 'Make Todo List', priority: 2, category: 'Coding', is_completed: false, due_at:1551048017233},
        {id: 3, task: 'Wash Dishes', priority: 1, category: 'Home', is_completed: true, due_at:1551048017233},
        {id: 4, task: 'Make Bed', priority: 1, category: 'Home', is_completed: true, due_at:1551048017233},
        {id: 5, task: 'Cook Dinner', priority: 1, category: 'Home', is_completed: false, due_at:1551048017233},
        {id: 6, task: 'Learn Python', priority: 1, category: 'Coding', is_completed: false, due_at:1551048017233}
      ]);
    });
};
