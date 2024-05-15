const Blague = require("../models/Blague");

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