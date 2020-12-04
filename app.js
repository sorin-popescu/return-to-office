const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const db = require('./db.js');
const port = process.env.PORT || 8080;
const Desk = require('./models/deskModel');
const Floor = require('./models/floorModel');
const desksRouter = require('./routes/desksRouter')(Desk);
const floorRouter = require('./routes/floorRouter')(Floor);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome')
});

app.use('/api', desksRouter);
app.use('/api', floorRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

