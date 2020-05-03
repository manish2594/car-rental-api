const router = require("express").Router();

router.get("/", require("./order.controller").fetchOrdersList);
router.post("/", require("./order.controller").addOrders);
router.post("/availability", require("./order.controller").ordersAvailability);

module.exports = router;
