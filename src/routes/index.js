const bookRouter = require("./book");
const { Router } = require("express");

const router = Router();
router.use("/books", bookRouter);

module.exports = router;