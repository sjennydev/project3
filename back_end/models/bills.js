// Schema/model
mongoose = require('../db/connection.js');

const BillsSchema = new mongoose.Schema ({
    name: String,
    amount: Number,
    isPaid: Boolean
})

mongoose.model('Budget', BillsSchema );

module.exports = mongoose;