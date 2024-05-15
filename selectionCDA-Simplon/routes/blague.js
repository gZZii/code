const express = require("express");
const router = express.Router();

const blagueCtrl = require("../controllers/blague");

router.get("/", blagueCtrl.getAllBlagues);
router.get("/:id", blagueCtrl.getBlagueById);
router.post("/", blagueCtrl.createBlague);

module.exports = router;
