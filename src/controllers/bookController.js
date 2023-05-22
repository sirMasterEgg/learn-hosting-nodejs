const db = require("../models/index");
const multer = require("multer");
const fs = require("fs");
const upload = multer({
  dest: "./uploads",
});

module.exports = {
  getAll: async function (req, res) {
    const books = await db.Book.findAll();
    return res.status(200).send(books);
  },
  create: async function (req, res) {
    const uploadFunc = upload.single("img");
    uploadFunc(req, res, async function (err) {
      if (err) {
        return res.status(400).send({ msg: "file error", ...err });
      }
      const book = await db.Book.create({
        title: req.body.title,
      });
      fs.renameSync(
        `./uploads/${req.file.filename}`,
        `./assets/books/${book.id}.png`
      );
      return res.status(201).send({
        ...book.dataValues, img: `/assets/books/${book.id}.png`
      });
    });
  },
};
