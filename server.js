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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server running on port " + PORT));

