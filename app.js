const express = require('express');

const app = express();
const port = process.env.PORT || 8080;
const desksRouter = require('./routes/desksRouter')();

app.get('/', (req, res) => {
    res.send('Welcome')
});

app.use('/api', desksRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

