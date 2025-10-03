// db.js
const mysql = require('mysql2');
require('dotenv').config();

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,        // Railway host
  port: process.env.DB_PORT || 3306, // Railway port
  user: process.env.DB_USER,        // Railway user
  password: process.env.DB_PASSWORD, // Railway password
  database: process.env.DB_NAME,    // Railway database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Export the pool with promise support
module.exports = pool.promise();
