const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
const app = express();

// Middleware to read JSON data
app.use(express.json());


mongoose.connect("mongodb+srv://rishabhgit1704_db_user:rishabhpwd123@clusteruser.aqrxrr7.mongodb.net/testdb?retryWrites=true&w=majority")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Sample Route
app.get("/", (req, res) => {
  res.send("Backend is Running...");
});

app.post("/api/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to add user" });
  }
});

// Start Server
app.listen(5000, () => {
  console.log("Server started on port 5000");
});


// rishabhgit1704_db_user
// rishabhpwd123