const express = require("express");
const router = express.Router();

const blagueCtrl = require("../controllers/blague");


/**
 * @swagger
 * /blagues:
 *   get:
 *     summary: Récupère toutes les blagues
 *     tags: [Blagues]
 *     responses:
 *       200:
 *         description: Liste de toutes les blagues
 */
router.get("/", blagueCtrl.getAllBlagues);

/**
 * @swagger
 * /blagues/random:
 *   get:
 *     summary: Récupère une blague aléatoire
 *     tags: [Blagues]
 *     responses:
 *       200:
 *         description: Blague aléatoire récupérée avec succès
 */
router.get("/random", blagueCtrl.getRandomBlague);

/**
 * @swagger
 * /blagues/{id}:
 *   get:
 *     summary: Récupère une blague par son ID
 *     tags: [Blagues]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la blague à récupérer
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Blague récupérée avec succès
 *       404:
 *         description: Blague non trouvée
 */
router.get("/:id", blagueCtrl.getBlagueById);

/**
 * @swagger
 * /blagues:
 *   post:
 *     summary: Crée une nouvelle blague
 *     tags: [Blagues]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               blague:
 *                 type: string
 *                 description: Texte de la blague
 *             example:
 *               blague: "Quel est le sport le plus silencieux ? Le para-chuuuut !"
 *     responses:
 *       201:
 *         description: Blague créée avec succès
 *       400:
 *         description: Requête invalide
 */
router.post("/", blagueCtrl.createBlague);


module.exports = router;
