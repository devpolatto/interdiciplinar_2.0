
exports.up = function(knex) {
    return knex.schema.createTable('planos', function (table) {
        table.increments()

        table.string('nome_plano').notNullable();
        table.decimal('valor').notNullable();

        table.integer('user_id').notNullable();
        table.foreign('user_id').references('id').inTable('users')
    });
};

exports.down = function(knex) {
  
};
