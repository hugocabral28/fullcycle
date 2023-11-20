require("dotenv").config();
const mysql = require('mysql2/promise');
const connection = mysql.createPool(process.env.CONNECTION_STRING || 'mysql://root:root@db:3306/dbnodeapp');

module.exports = connection;