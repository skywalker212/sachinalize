const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const dotenv = require("dotenv");
const path = require("path");

global.path = path;
global.dotenv = dotenv;
const config = dotenv.config();
if (!config.error) console.log("successfully loaded env variables");

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'));

app.get('/', function (request, response) {
    response.render("index");
});

app.listen(port, () => {
    console.log('app running on port: ', port);
});