const db = require('../../data/db-config');

module.exports = {
  getRecipes() {
    return db('recipes');
  },
  getRecipeById(id) {
    return('recipes').where('recipe_id', id).first();
  },
  getShoppingList(recipe_id) {
    return db('recipe_ingredients as ri')
      .join('recipes as r', 'ri.recipe_id', 'r.recipe_id')
      .join('ingredients as i', 'ri.ingredient_id', 'i.ingredient_id')
      .select('i.ingredient_name', 'ri.ingredient_quantity')
      .where('ri.recipe_id', recipe_id);
  },
  getInstructions(recipe_id) {
    return db('steps as s')
      .where('s.recipe_id', recipe_id)
      .orderBy('s.step_number', 'asc');
  }
};