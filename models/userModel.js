//next folder will be seed
const pool = require('../config/db');            //importing postgres connection pool in commonJS method
// Create users table if it doesn't exist
const createUserTable = async () => {               //IF NOT EXISTS will make sure to avoid duplication
  const query = `     
    CREATE TABLE IF NOT EXISTS users (       
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  try {                                //try/catch block for error handling (famous error handling technique)
    await pool.query(query);          //pool.query() sends a SQLcommand to postgres. If query succeeds will move to next line else will to jump to catch block to throw error
    console.log('✅ Users table created or already exists');
  } catch (err) {
    console.error('❌ Error creating users table:', err.message);
  }
};

// Fetch all users
const getAllUsers = async () => {
  const result = await pool.query('SELECT * FROM users');
  return result.rows;
};

// Used for runtime user creation (e.g., registration)
/*const createUser = async (name, email, password) => {
  const query = `
    INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const values = [name, email, password];
  const result = await pool.query(query, values);
  return result.rows[0];
};*/

module.exports = { createUserTable, getAllUsers };
