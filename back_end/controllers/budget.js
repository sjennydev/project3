//controller/router

const express = require('express')
const router = express.Router()

const mongoose = require('../models/Bills.js');
const Budget = mongoose.model('Budget')

router.get('/', (req, res) => {
    Budget.find({})
        .then(budget => res.json(budget));
})

router.delete('/:id', (req, res) => {
    Budget.findByIdAndRemove(req.params.id, (err, deletedBill) => {
        res.json(deletedBill);
    })
})

router.post('/', (req, res) => {
    Budget.create(req.body, (err, createdBill) => {
        res.json(createdBill);
    });
})

router.put('/:id', (req, res) => {
    Budget.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedBill) => {
        res.json(updatedBill)
    })
})

module.exports = router