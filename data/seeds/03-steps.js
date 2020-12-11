
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_number: 1, step_text: 'Remove pasta from packaging', recipe_id: 1},
        {step_number: 2, step_text: 'Feel a deep sense of disgust and go to a restaurant instead', recipe_id: 1},
        {step_number: 1, step_text: 'Remove calamari from packaging', recipe_id: 2},
        {step_number: 2, step_text: 'Feel a deep sense of disgust and go to a restaurant instead', recipe_id: 2}
      ]);
    });
};
