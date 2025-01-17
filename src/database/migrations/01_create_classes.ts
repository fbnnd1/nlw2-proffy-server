import knex from 'knex';

export async function up(Knex: knex) {
    return Knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        table.integer('userId')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

    });
}

export async function down(Knex: knex) {
    return Knex.schema.dropTable('classes');
}
