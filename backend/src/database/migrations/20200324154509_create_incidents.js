exports.up = function(knex) {
	return knex.schema.createTable("incidents", function(table) {
		table.increments();
		table.string("title").notNullable();
		table.string("description").notNullable();
		table.decimal("value").notNullable();

    table.string("ong_id").notNullable(); /**Coluna para validar que o registro é feito por uma ONG cadastrada */

    table.foreign("ong_id").references("id").inTable("ongs"); /**Chave de validação de cadastro da ONG */
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable("incidents");
};
