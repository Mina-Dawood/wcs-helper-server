const express = require('express');
const cors = require('cors');
const uat = require('./uat.router');
const staging2 = require('./staging2.router');
const prodref = require('./prodref.router');
const prod = require('./prod.router');

const app = express();

app.use(cors({ origin: 'https://github.vodafone.com/' }));

app.use('/api/uat', uat);
app.use('/api/staging2', staging2);
app.use('/api/prodref', prodref);
app.use('/api/prod', prod);

const port = process.env.PORT || 5000;
app.listen(port);