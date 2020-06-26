const dotenv = require('dotenv');

/**
 * @const {Knex} db
 */
const db = require('./db');

dotenv.config();

setInterval(async () => {
	await generateTemperature();
}, 600000);

const generateTemperature = async () => {
	/**
	 * @const {Date} d
	 */
	const d = new Date();
	console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
	await db('temperatures').insert({
		temperature: Math.floor((Math.random() * 30) + 5),
		humidity: Math.floor((Math.random() * 100) + 1),
		time: `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
		date: `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`,
	});	
};

generateTemperature();