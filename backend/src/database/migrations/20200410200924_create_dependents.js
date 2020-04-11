
exports.up = function(knex) {
    return knex.schema.createTable('dependents', function (table) {
        table.increments()
    
        table.string('name').notNullable();
        table.string('cpf').notNullable();
        table.string('sexo').notNullable();
        table.integer('idade').notNullable();
        table.string('nascimento').notNullable();
        table.string('whatsapp').notNullable();
        table.string('email').notNullable();

        table.integer('user_id_dependents').notNullable();
        table.foreign('user_id_dependents').references('id').inTable('users')
    
      })
};

exports.down = function(knex) {
  
};
