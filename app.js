const express = require("express");
const connectdb = require("./database.js");
const bookRouter = require("./api/books/books.routes.js");
const morgan = require("morgan");
const cors = require("cors");
const notFoundHandler = require("./middleware/notFoundHandler.js");
const errorHandler = require("./middleware/errorHandler.js");

const PORT = 8000;
const app = express();
connectdb();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/books", bookRouter);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
