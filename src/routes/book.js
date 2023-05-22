const { Router } = require("express");
const bookController = require("../controllers/bookController");
const router = Router();

router.get("/", bookController.getAll);
router.post("/", bookController.create);

module.exports = router;