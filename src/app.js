const express = require("express");
const usersRouter = require("./users/users.router");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "My server is OK!",
    });
});

app.use("/", usersRouter);

app.listen(9000, () => {
    console.log("Server started at port 9000");
});

module.exports = app;
