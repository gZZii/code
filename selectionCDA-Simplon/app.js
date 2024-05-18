const express = require("express");
const sequelize = require("./database");
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger');

sequelize.sync().then(() => console.log("Database is connected"));

const app = express();
app.use(express.json());
app.use(express.static("public"));

const blagueRoutes = require("./routes/blague");

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/blagues", blagueRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.sendFile('./public/index.html', { root: __dirname });
});

module.exports = app;