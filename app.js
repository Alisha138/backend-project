const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const { createUserTable } = require('./models/userModel');
require('dotenv').config();

app.use(express.json());
app.use('/api', userRoutes);

// Create table on startup
createUserTable();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('🚀 Backend server is running!');
});
