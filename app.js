const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes.js");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoints
routes(app);

// 
let server = app.listen(3000, () => {
    console.log("app running on port.", server.address().port);
});