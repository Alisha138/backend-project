const { getUsers } = require('../models/userModel');

const fetchUsers = async (req, res) => {
  try {
    const users = await getUsers();
    console.log('✅ Users fetched:', users);
    res.status(200).json(users);
  } catch (err) {
    console.error('❌ Error in fetchUsers:', err.message);
    res.status(500).json({ error: 'Failed to fetch users'  });
  }
};

module.exports = { fetchUsers };
