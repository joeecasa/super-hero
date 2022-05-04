const express = require("express");
const HeroController = require("../controllers/HeroController");

const router = express.Router()

router.get("/", HeroController.index)
router.get("/detalle/:heroe", HeroController.details)
router.get("/publisher/:publisher", HeroController.publisher)



module.exports = router;
