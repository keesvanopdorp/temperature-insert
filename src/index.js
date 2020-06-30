const dotenv = require('dotenv');
dotenv.config();
const {generateTemperature} = require('./utils/functions');



setInterval(async () => {
	await generateTemperature();
}, 600000);

generateTemperature();
