const express = require('express');
const app = express();
const { animals } = require('./data/animals');

app.get('/api/animals', (req, res) => {
    let results = animals;
    console.log(req.query)
    // change .json to .send here for small data
    res.json(animals);
});

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});