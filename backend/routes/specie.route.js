const express = require("express");
const specieController = require("../controllers/specie.controller.js");
const router = express.Router();

router.get("/", specieController.getSpecies);
router.get("/:id", specieController.getSpecieById);
router.post("/", specieController.createSpecie);
router.delete("/:id", specieController.deleteSpecie);
router.patch("/:id", specieController.updateSpecie);

module.exports = router;