//fulfillment.js

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /fullfillment'
    });
});

router.post('/', (req, res, next) => {
    const complete = {
        orderId: req.body.orderId,
        date: req.body.date,
        time: req.body.time,
    }
    res.status(200).json({
        message: 'Handling POST requests to /fullfillment',
        createdComplete:complete
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id,
        })
    }else{
        res.status(200).json({
            message: 'You passed an ID'
        })
    }
})

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated order record!'
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Selected record deleted!'
    });
});

router.put('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated order record!'
    });
})

module.exports = router;
