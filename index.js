require("dotenv").config();
const express = require("express");
const router = require("./src/routes/index");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use("/assets", express.static("assets"));
app.use("/api", router);

const port = process.env.PORT;
app.listen(port, function () {
  console.log(`listening on port ${port}...`);
});
