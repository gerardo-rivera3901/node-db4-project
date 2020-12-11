
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Chicken Alfredo'},
        {recipe_name: 'Fried Calamari'}
      ]);
    });
};
