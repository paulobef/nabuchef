const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {
    console.log('Ingredients fetched')
    res.status(200).json({
        message: 'Ingredients fetched'
    })
})


module.exports = router;