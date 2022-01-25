const express = require('express');
const app = express();
const { animals } = require('./data/animals');


app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});