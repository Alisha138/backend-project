const pool = require('../config/db');

const seedUsers = async () => {
  try {
    await pool.query('DELETE FROM users'); // optional: clear existing data

    await pool.query(`
      INSERT INTO users (name, email, password)
      VALUES 
        ('Alisha', 'alisha@example.com', 'pass123'),
        ('Sara', 'sara@example.com', 'sarapass'),
        ('John', 'john@example.com', 'johnpass');
    `);

    console.log('✅ Users seeded successfully');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seeding failed:', err.message);
    process.exit(1);
  }
};

seedUsers();
