const express = require("express");
const router = express.Router();
const quoteRoutes = require("./quote_routes");

router.use("/quotes", quoteRoutes);

module.exports = router;