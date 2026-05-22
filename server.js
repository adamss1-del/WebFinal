const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let registrations = [];

app.post("/register", (req, res) => {
  const data = req.body;

  registrations.push(data);

  res.json({
    message: "Registration successful!"
  });
});

app.get("/students", (req, res) => {
  res.json(registrations);
});

app.listen(5000, () => console.log("Server running on port 5000"));