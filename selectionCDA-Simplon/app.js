const express = require("express");
const sequelize = require("./database");

sequelize.sync().then(() => console.log("Database is connected"));

const app = express();
app.use(express.json());

const blagueRoutes = require("./routes/blague");

app.use("/blagues", blagueRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.sendFile('./views/index.html', { root: __dirname });
});

module.exports = app;