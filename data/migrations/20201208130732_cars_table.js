
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
      table.increments()
      table.text('make', 128).notNullable()
      table.text('model', 128).notNullable()
      table.integer('VIN').unique().notNullable()
      table.integer('mileage').notNullable()
      table.text('transmissionType', 255)
      table.text('titleStatus', 255)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
