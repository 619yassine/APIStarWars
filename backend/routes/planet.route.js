const express = require("express");
const planetController = require("../controllers/planet.controller.js");
const router = express.Router();

router.get("/", planetController.getPlanets);
router.get("/:id", planetController.getPlanetById);
router.post("/", planetController.createPlanet);
router.delete("/:id", planetController.deletePlanet);
router.patch("/:id", planetController.updatePlanet);

module.exports = router;