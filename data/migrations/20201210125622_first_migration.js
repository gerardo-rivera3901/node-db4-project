
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments('recipe_id');
      tbl.string('recipe_name', 128).notNullable();
    })
    .createTable('ingredients', tbl => {
      tbl.increments('ingredient_id');
      tbl.string('ingredient_name', 128).notNullable();
    })
    .createTable('steps', tbl => {
      tbl.increments('step_id');
      tbl.integer('step_number').notNullable();
      tbl.string('step_text', 256).notNullable();
      tbl.integer('recipe_id')
        .unsigned().notNullable()
        .references('recipe_id').inTable('recipes')
        .onDelete('CASCADE').onUpdate('CASCADE');
    })
    .createTable('recipe_ingredients', tbl => {
      tbl.increments('recipe_ingredient_id');
      tbl.integer('recipe_id')
        .unsigned().notNullable()
        .references('recipe_id').inTable('recipes')
        .onDelete('CASCADE').onUpdate('CASCADE');
      tbl.integer('ingredient_id')
        .unsigned().notNullable()
        .references('ingredient_id').inTable('ingredients')
        .onDelete('CASCADE').onUpdate('CASCADE');
      tbl.string('ingredient_quantity', 128).notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
