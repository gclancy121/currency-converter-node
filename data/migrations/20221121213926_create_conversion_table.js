exports.up = function(knex) {
  return knex.schema.createTable('conversions', conversion => {
    conversion.string('country_name', 50).unique().notNullable();
    conversion.float('conversion_rate', 15).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('conversions');
};
