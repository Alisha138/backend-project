//This file inserts dummy data into the database for testing or development.
const pool = require("../config/db");

const seedUsers = async () => {
  try {
    await pool.query("DELETE FROM users"); // optional: clear existing data

    await pool.query(`
      INSERT INTO users (name, email, password)
      VALUES 
        ('Alisha', 'alisha@example.com', 'pass123'),
        ('Sara', 'sara@example.com', 'sarapass'),
        ('John', 'john@example.com', 'johnpass');
    `);

    console.log("✅ Users seeded successfully");
    process.exit(0); //process.exit() says that now you have to exit node.js process and return a message (not shown directly), 0 for success 1 for failure
  } catch (err) {
    console.error("❌ Seeding failed:", err.message);
    process.exit(1);
  }
};

seedUsers(); //this object is not needed to import as is is not reused, it just needs a command to get run. Whenever we run that command it will be executed once and exite
