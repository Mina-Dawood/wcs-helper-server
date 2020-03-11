const express = require('express');
const cors = require('cors');
const uat = require('./uat.router');
const staging2 = require('./staging2.router');
const prodref = require('./prodref.router');
const prod = require('./prod.router');
const request = require('request');

const app = express();

app.use(cors());

app.use('/api/uat', uat);
app.use('/api/staging2', staging2);
app.use('/api/prodref', prodref);
app.use('/api/prod', prod);

app.get('/', (req, res) => {
    res.send('WCS Helper Server is Running ...');
})

app.get('/api/load-json', (req, res) => {
    const url = req.query.url;
    request(url, { json: true }, (err, subRes, body) => {
        if (err) { return console.log(err); }
        res.send(subRes.body);
    });
})

const port = process.env.PORT || 5000;
app.listen(port);