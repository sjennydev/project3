const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("Hello Ninjas!")
})

app.listen(PORT, (req, res) => {
    console.log('listening on port 3000 for project3')
})