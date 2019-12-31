const mongoose = require('../models/Expenses.js')
const data = require('./data')

const Expenses = mongoose.model('Expenses')

Expenses.remove({})
    .then(_ => {
        Expenses.collection.insert(data)
            .then(seededEntries => {
                console.log(seededEntries)
                process.exit()
            })
    })
    .catch(err => {
        console.log(err)
    })