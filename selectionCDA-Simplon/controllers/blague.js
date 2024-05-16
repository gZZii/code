const Blague = require("../models/Blague");
const sequelize = require("../database");

exports.createBlague = async (req, res) => {
    try {
        const blague = await Blague.create(req.body);
        res.status(201).json(blague);
}   catch (err) {
        console.error(err);
        res.status(500).json({ message: "Erreur lors de la création de la blague" });
    }
}

exports.getAllBlagues = async (req, res) => {
    try {
        const blagues = await Blague.findAll();
        res.json(blagues);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Erreur lors de la récupération des blagues" });
    }
}

exports.getBlagueById = async (req, res) => {
    try {
        const blague = await Blague.findByPk(req.params.id);
        res.json(blague);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Erreur lors de la récupération de la blague" });
    }
}

exports.getRandomBlague = async (req, res) => {
    try {
        const randomBlague = await sequelize.query('SELECT id FROM blagues ORDER BY RANDOM() LIMIT 1', { plain: true });
        const blague = await Blague.findByPk(randomBlague.id);
        res.json(blague);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Erreur lors de la récupération de la blague aléatoire" });
    }
}