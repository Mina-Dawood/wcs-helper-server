const express = require('express');
const request = require('request');

const router = express.Router();

router.get('/', async (req, res) => {
    request('https://assets-es-uat.myvdf.aws.cps.vodafone.com/mves/content', { json: true }, (err, subRes, body) => {
        if (err) { return console.log(err); }
        res.send(subRes.body);
    });
})

module.exports = router;