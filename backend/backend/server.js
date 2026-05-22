const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let registrations = [];

app.get("/", (req, res) => {
  res.send("API is running");
});

app.post("/register", (req, res) => {
  registrations.push(req.body);
  res.json({ message: "Registration successful!" });
});

app.get("/students", (req, res) => {
  res.json(registrations);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on " + PORT));
