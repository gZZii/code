const express = require("express");
const sequelize = require("./database");
const Blague = require("../Blague");

sequelize.sync().then(() => console.log("Database is connected"));

const app = express();

app.use(express.json());

app.post("/blagues", async (req, res) => {
  const blague = await Blague.create(req.body);
  res.json(blague);
});

app.get("/blagues", async (req, res) => {
  const blagues = await Blague.findAll();
  res.json(blagues);
});

app.get("/blagues/:id", async (req, res) => {
  const blague = await Blague.findByPk(req.params.id);
  res.json(blague);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
