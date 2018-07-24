const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const dotenv = require("dotenv");
const path = require("path");
const es = require("elasticsearch");
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const publicPath = path.resolve(process.cwd(), 'public');

const webpack = require("webpack");
const wpconfig = require("../../webpack.common.js");
const compiler = webpack(wpconfig);

app.use(webpackDevMiddleware(compiler, {
    publicPath: wpconfig.output.publicPath,
    stats: {colors: true}
}));

app.use(webpackHotMiddleware(compiler, {
    log: console.log
}));

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

app.use(bodyParser.json());

app.use(express.static(publicPath));

app.get('/status', (req, res) => {
    client.cluster.health(function (err, resp) {
        if (err) {
            res.json(err)
        } else {
            res.json(resp)
        }
    });
});

app.get('*', function(req, res){
    res.sendFile(path.resolve(publicPath, 'index.html'));
})

app.listen(port, () => {
    console.log('app running on port: ', port);
});