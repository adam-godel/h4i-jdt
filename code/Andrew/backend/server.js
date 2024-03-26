const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const routes = require('./routes');
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})