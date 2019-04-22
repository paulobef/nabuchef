const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {
    console.log('Orders fetched')
    res.status(200).json({
        message: 'Orders fetched'
    })
})


module.exports = router;