const pool = require('../config/db');

// Create users table if it doesn't exist
const createUserTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS Users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  try {
    await pool.query(query);
    console.log('✅ Users table created or already exists');
  } catch (err) {
    console.error('❌ Error creating users table:', err.message);
  }
};

// Fetch all users
const getAllUsers = async () => {
  const result = await pool.query('SELECT * FROM Users');
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
