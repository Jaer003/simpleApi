const express = require("express");

const app = express();
const bodyparser = require("body-parser");

const port = process.env.PORT || 3200;

const orders = [];

// middleware

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.get("/test", (req, res) => {
    res.status(200).send("Working");
});

app.listen(port, () => {
    console.log(`running on port ${port}`);
});
