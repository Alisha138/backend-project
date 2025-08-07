//This file main entry point — sets up Express server, middleware, routes, and starts listening. Its using express (express(), app.use(), app.listen()) and node (require, environment config)

const express = require("express");
const app = express(); //creating an instance of express app that will be used to define routes

const userRoute = require("./routes/userRoutes"); //imported exported names can be different
const { createUserTable } = require("./models/userModel");
require("dotenv").config(); //loads environment variables from .env into process.env

app.use(express.json()); //Adds middleware to parse incoming JSON requests
app.use("/api", userRoute);

// Create table on startup
createUserTable();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  //listen: express app method starts the server and listens on port
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
  //get:express method for http get handling read requests (fetching, bring data) (post is vice versa)
  res.send("🚀 Backend server is running!"); //send: express respones method sending a response back to the client
});
