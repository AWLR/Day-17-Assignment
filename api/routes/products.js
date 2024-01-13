// products.js
// by RazmanR  assign1day17


// express is a framework 
const express = require('express');
const router = express.Router();


const product = {
    // id: req.body.id,
    // price: req.body.price,
};

router.get('/', (req, res, next) => {
    const product = {
        id: req.body.id,
        price: req.body.price,
        title: req.body.title,
        description: req.body.description,
    };

    const id = req.body.id;

    res.status(200).json(
        {
            message: "handling product get PRODUCT id " + id,
            id: req.body.id,
            price: req.body.price,
            title: req.body.title,
            description: req.body.description,
        });

});


//   post works. try with /products post htp
router.post('/', (req, res, next) => {
    const id = req.body.id;
    const product = {
        id: req.body.id,
        price: req.body.price,
        title: req.body.title,
        description: req.body.description,
    };

    res.status(200).json(
        {
            message: "POST handling product new created  PRODUCT id " + id,

            product: product,


        });
});

 
router.get('/:productid', (req, res, next) => {
     
    const msg = " GET handling  ";

    const id = req.params.productid;
    const product = {
        id: id,
        price: req.body.price,
        title: req.body.title,
        description: req.body.description,
    };

    res.status(200).json(
        {
            message: msg + " PRODUCT id " + id,

            product: product,


        });
});


router.put('/:productid', (req, res, next) => {

    const msg = " PUT handling  ";

    const id = req.params.productid;
    const product = {
        id: id,
        price: req.body.price,
        title: req.body.title,
        description: req.body.description,
    };

    res.status(200).json(
        {
            message: msg + " PRODUCT id " + id,

            product: product,


        });
});



router.patch('/:productid', (req, res, next) => {

    const msg = " PATCH  handling updated ";

    const id = req.params.productid;
    const product = {
        id: id,
        price: req.body.price,
        title: req.body.title,
        description: req.body.description,
    };

    res.status(200).json(
        {
            message: msg + " PRODUCT id " + id,

            product: product,


        });
});


router.delete('/:productid', (req, res, next) => {

    const msg = " DELETE  handling delete data: ";

    const id = req.params.productid;
    const product = {
        id: id,
        price: req.body.price,
        title: req.body.title,
        description: req.body.description,
    };

    res.status(200).json(
        {
            message: msg + " PRODUCT id " + id,

            product: product,


        });
});




module.exports = router;
