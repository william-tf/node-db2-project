const express = require('express')
const router = express.Router()
const Car = require('./cars-modal')

router.get('/', (req, res) => {
    Car.get()
    .then(poopnasty => {
        res.status(200).json(poopnasty)
    })
    .catch(err => res.status(500).json({Message: err.message}))
})
router.post('/', (req, res) => {
    const newCar = req.body
    Car.create(newCar)
    .then(newcar => {
        res.status(201).json(newcar)
    })
    .catch(err => res.status(500).json({Message: err.message}))
})

module.exports = router