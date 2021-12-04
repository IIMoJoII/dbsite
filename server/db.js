const { Sequelize } = require('sequelize')
require('dotenv').config();
console.log(233, process.env.DB_HOST)

module.exports = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)