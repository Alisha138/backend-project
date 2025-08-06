const express = require('express');
const { fetchUsers } = require('../controllers/userController');

const router = express.Router();

router.get('/users', fetchUsers);

/*router.get('/', (req, res) => {
  res.json({ message: 'User route working!' });
});*/

/* GET all users
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});*/

module.exports = router;
