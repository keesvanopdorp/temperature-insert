/**
 * 
 * @param {Knex} knex 
 */
exports.up = async (knex) => {
	/**
	 * @param {TableBuilder} table
	 */
	knex.schema.createTable('temperatures', (table)=> {
		table.increments('id').primary().notNullable();
		table.integer('temperature').notNullable();
		table.integer('humidity').notNullable();
		table.date('date').notNullable();
		table.time('time').notNullable();
	});
};


/**
 * 
 * @param {Knex} knex 
 */
exports.down = async (knex) => {
	knex.schema.dropTableIfExists('temperatures');
};