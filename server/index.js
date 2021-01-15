const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./config/mongoDBConfig");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
app.use(cors());

// Request Body Parser Middleware
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.NODE_PORT || 5050;

// api routes
app.use("/api/todo", require("./components/todo/todoRoute"));
app.use("/api/bucket", require("./components/bucket/bucketRoute"));

app.use(errorHandler);

const server = app.listen(PORT, function () {
    console.log("server running on port ", PORT);
});