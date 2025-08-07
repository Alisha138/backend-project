//This file handles request logic — calls model functions and sends responses. Its using express (req,res) and also node(async/await, error handling)

const { getAllUsers } = require("../models/userModel"); //it was exported in curly braces so imported will also be in curly braces

const fetchUsers = async (req, res) => {
  //req and res are Express request and response objects that are used to show output as a response.
  try {
    const users = await getAllUsers();
    console.log("✅ Users fetched:", users);
    res.status(200).json(users); //200 means ok
  } catch (err) {
    console.error("❌ Error in fetchUsers:", err.message);
    res.status(500).json({ error: "Failed to fetch users" }); //500 means internal server error
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

//next folder will be routes
