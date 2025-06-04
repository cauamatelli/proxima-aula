const {Sequelize}  = require('sequelise');
require('detenv').config();

const sequelise = new Sequelise(
   
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        loggin: process.env.MODE_ENV=== 'development',
        pool: {
           
            max: 5,
            min: 0,
            acquire: 3000,
            idle: 1000,
        }
    }
);

module.exports = sequelize;