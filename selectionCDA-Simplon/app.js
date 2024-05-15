const express = require('express');
const sequelize = require('./database');
const Joke = require('./Joke');

sequelize.sync().then(() => console.log('Database is connected'));

const app = express();

app.use(express.json());

app.post('/jokes', (req, res) => {
    Joke.create(req.body)
    .then(joke => {
        res.json(joke);
    });
});

app.listen(3000, () => {    
    console.log('Server is running on port 3000');
});

