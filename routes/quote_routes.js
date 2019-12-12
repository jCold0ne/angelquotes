const express = require("express");
const router = express.Router();
const QuoteController = require("./../controllers/quote_controller");

router.get("/", QuoteController.index);

router.post("/", QuoteController.create);

// router.get("/new", QuoteController.make);

router.get("/:id", QuoteController.show);

router.get("/:id/edit", QuoteController.edit);

router.patch("/:id", QuoteController.update);

router.put("/:id", QuoteController.update);

router.delete("/:id", QuoteController.destroy);



module.exports = router;