const express = require("express");
const cors = require("cors");
const app = express();
const setupContactRoutes = require("./app/routes/contact.routes");
const { BadRequestError, ErrorHandler } = require("./app/errors");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application." });
});

setupContactRoutes(app);

app.use((req, res, next) => {
    next(new BadRequestError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
    ErrorHandler.handleError(err, res);
});
module.exports = app;