/**
 * @const {Knex} db
 *
 */
const db = require('../db');

/**
 *
 * @returns {Promise<void>}
 */
const generateTemperature = async () => {
    /**
     * @const {Date} d
     */
    const d = new Date();
    const date = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    const time =  `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    logDateAndTime(time, date);
    await db('temperatures').insert({
        temperature: Math.floor((Math.random() * 30) + 5),
        humidity: Math.floor((Math.random() * 100) + 1),
        time: `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
        date: `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`,
    }).catch((e) => {
        console.error(e);
        logDateAndTime(time, date);
    });
};

/**
 *
 * @param {string} time
 * @param {string} date
 */
const logDateAndTime = (time, date) => {
    console.log(`time ${time}`);
    console.log(`date ${date}`);
}

module.exports = {
    generateTemperature
}
