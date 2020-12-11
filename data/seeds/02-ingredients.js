
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'Frozen Chicken Alfredo'},
        {ingredient_name: 'Frozen Fried Calamari'}
      ]);
    });
};
