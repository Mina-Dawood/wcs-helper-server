const express = require('express');
const request = require('request');

const router = express.Router();

router.get('/', async (req, res) => {
    request('https://assets-es.myvdf.aws.cps.vodafone.com/mves/contentprod_web.json', { json: true }, (err, subRes, body) => {
        if (err) { return console.log(err); }
        res.send(subRes.body);
    });
})

module.exports = router;