const db = require('../config/db');

const getUsers = async () => {
  try {
    const result = await pool.query('select *from users');
    console.log('✅ Query result:', result.rows);
    return result.rows;
  } catch (err) {
    console.error('❌ Query error:', err.message);
    throw err;
  }
};

module.exports = { getUsers };
