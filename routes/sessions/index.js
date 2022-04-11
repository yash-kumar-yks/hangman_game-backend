const { Router } = require("express");
const Controller = require("./controller");
const router = Router();
router.post("/", Controller.Createsession);
router.post("/:id/play", Controller.Playsession);

module.exports = router;