const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /delivery'
    });
});

router.post('/', (req, res, next) => {
    const delivery = {
        name: req.body.name,
        address: req.body.address,
        phonenumber: req.body.phonenumber,
    }
    res.status(200).json({
        message: 'Handling POST requests to /delivery',
        createdDelivery:delivery
    });
});

router.get('/:deliveryId', (req, res, next) => {
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

router.patch('/:deliveryId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated delivery details!'
    });
});

router.delete('/:deliveryId', (req, res, next) => {
    res.status(200).json({
        message: 'Canceled delivery!'
    });
});

router.put('/:deliveryId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated delivery details!'
    });
})

module.exports = router;
