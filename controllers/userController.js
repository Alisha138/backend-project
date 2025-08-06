const { getAllUsers } = require('../models/userModel');

const fetchUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    console.log('✅ Users fetched:', users);
    res.status(200).json(users);
  } catch (err) {
    console.error('❌ Error in fetchUsers:', err.message);
    res.status(500).json({ error: 'Failed to fetch users'  });
  }
};

// Used for runtime user creation (e.g., registration)
/*const addUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newUser = await createUser(name, email, password);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create user' });
  }
};*/

module.exports = { fetchUsers };
