
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'thing1', priority: 1, category: '', is_completed: false, due_at:1551048017233},
        {id: 2, task: 'thing2', priority: 1, category: '', is_completed: false, due_at:1551048017233},
        {id: 3, task: 'thing3', priority: 1, category: '', is_completed: false, due_at:1551048017233}
      ]);
    });
};
