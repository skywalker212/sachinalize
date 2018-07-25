const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const dotenv = require("dotenv");
const path = require("path");
const es = require("elasticsearch");
const queries = require("./queries/queries.js");
const publicPath = path.resolve(process.cwd(), 'public');

//setup webpack environment
const webpack = require("webpack");
const wpconfig = require("../../webpack.common.js");
const compiler = webpack(wpconfig);
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

if(process.env.NODE_ENV!=='production'){
    console.log("in developer environment");
    app.use(webpackDevMiddleware(compiler, {
        publicPath: wpconfig.output.publicPath,
        stats: {colors: true}
    }));
    app.use(webpackHotMiddleware(compiler, {
        log: console.log
    }));
}

//setup path variables
global.path = path;
global.dotenv = dotenv;
const config = dotenv.config();
if (!config.error) console.log("successfully loaded env variables");

//setup elasticsearch
const client = new es.Client({
    host: process.env.ES_CONFIG
});

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use(express.static(publicPath));

//setup APIs
app.get('/status', (req, res) => {
    client.cluster.health(function (err, resp) {
        if (err) {
            res.json(err)
        } else {
            res.json(resp)
        }
    });
});

app.get('/aggregation',(req,res)=>{
    console.log(req.query.type);
});

app.get('*', function(req, res){
    res.sendFile(path.resolve(publicPath, 'index.html'));
});

//listen to configured port
app.listen(port, () => {
    console.log('app running on port: ', port);
});