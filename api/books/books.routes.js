express = require("express");
bookRouter = express.Router();
bookRouter.use(express.json());
const {
  getAllBooks,
  createABook,
  getBookById,
  deleteBookById,
  updateBookById,
} = require("./books.controller.js");

bookRouter.get("/", getAllBooks);
bookRouter.post("/", createABook);
bookRouter.get("/:_id", getBookById);
bookRouter.delete("/:_id", deleteBookById);
bookRouter.put("/:_id", updateBookById);

module.exports = bookRouter;
