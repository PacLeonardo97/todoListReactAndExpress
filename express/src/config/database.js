require('dotenv/config');
const path = require('path');

module.exports = {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    storage: process.env.DB_STORAGE ? path.join(__dirname, '../../data.sqlite') : '',
    define: {
        timestamps: true,
        underscored: true,
    }
}
