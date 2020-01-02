// Schema/model
mongoose = require('../db/connection.js');

const ExpensesSchema = new mongoose.Schema ({
    name: String,
    amount: Number
})
mongoose.model('Expenses', ExpensesSchema );

module.exports = mongoose;