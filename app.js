const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const dotenv = require("dotenv");
const path = require("path");
const es = require("elasticsearch");

global.path = path;
global.dotenv = dotenv;
const config = dotenv.config();
if (!config.error) console.log("successfully loaded env variables");

const client = new es.Client({
    host: process.env.ES_CONFIG
});

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'));

app.get('/', function (request, response) {
    response.render("index");
});

app.get('/status', (req, res) => {
    client.cluster.health(function (err, resp) {
        if (err) {
            res.json(err)
        } else {
            res.json(resp)
        }
    });
});

app.listen(port, () => {
    console.log('app running on port: ', port);
});