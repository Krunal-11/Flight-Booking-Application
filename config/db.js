require('dotenv').config();

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host:process.env.db_host,
    user:process.env.db_user,
    password:process.env.db_password,
    database:process.env.db_database
});


module.exports = pool;
