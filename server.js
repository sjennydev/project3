
const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3000;


const budgetController = require('./back_end/controllers/budget.js');

const app = express();

app.use(cors());
app.use(parser.json());
app.use(express.static('public'));
// testing

app.use('/budget', budgetController);

app.listen(PORT, () => console.log('Listening on port 3000 for project3'));
