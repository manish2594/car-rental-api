const router = require("express").Router();

router.get("/", require("./carRegistration.controller").fetchCarList);
router.post("/", require("./carRegistration.controller").addCar);

module.exports = router;
