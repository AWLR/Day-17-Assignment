const express = require('express');
const router = express.Router();
const axios = require('axios'); //install axios using [npm install axios] 

//GET
router.get('/',(req,res,next)=>{
    const cart = {
        name: req.body.name,
        quantity: req.body.quantity,
        price: req.body.price,
    };
    res.status(200).json({
        message: 'GET request /cart',
        createdCart: cart,
    });
});

router.get('/:cartid' , (req,res,next)=>{
    res.status(200).json({
        message: 'cart GET'
    });
});

//POST
router.post('/', async (req,res,next)=>{
    try{
    const response = await axios.get('https://fakestoreapi.com/carts');
        const cartData = response.data;
        
    res.status(200).json({
        message: 'POST request /cart',
        cart: cartData,
    });
    }catch (error){
        console.error('Error fetching cart data:', error);
        res.status(500).json({
            error: 'Internal server error'
        });
    }

});

router.post('/:cartid' , (req,res,next)=>{
    res.status(200).json({
        message: 'cart POST'
    });
});

//PUT
router.put('/',(req,res,next)=>{
    res.status(200).json({
        message: 'PUT request /cart'
    });
});

router.put('/:cartid' , (req,res,next)=>{
    res.status(200).json({
        message: 'cart PUT'
    });
});

//PATCH
router.patch('/',(req,res,next)=>{
    res.status(200).json({
        message: 'PATCH request /cart'
    });
});

router.patch('/:cartid' , (req,res,next)=>{
    res.status(200).json({
        message: 'cart Patch'
    });
});

//DELETE
router.delete('/',(req,res,next)=>{
    res.status(200).json({
        message: 'DELETE request /cart'
    });
});

router.delete('/:cartid', (req,res,next)=>{
    res.status(200).json({
        message: 'cart deleted.'
    });
});

module.exports = router;