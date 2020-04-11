
exports.up = function(knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments()

    table.string('id_rash').notNullable();
    table.string('name').notNullable();
    table.string('cpf').notNullable();
    table.string('sexo').notNullable();
    table.integer('idade').notNullable();
    table.string('nascimento').notNullable();
    table.string('whatsapp').notNullable();
    table.string('email').notNullable();

  })
};

exports.down = function(knex) {
  
};
