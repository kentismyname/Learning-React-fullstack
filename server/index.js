const express = require("express");
const app = express();
const cors = require('cors');

// Import Body Parser Middleware
app.use(express.json());
app.use(cors());
const db = require("./models");

// Routers
const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server Running on port 3001");
    });
});
