const { Model, DataTypes } =  require('sequelize');
const sequelize = require('./database');

class Joke extends Model {}

Joke.init({
    joke: {
        type: DataTypes.STRING,
    }
},
{
    sequelize,
    modelName: 'joke',
});

module.exports = Joke;