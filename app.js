const express = require('express');
const app = express();
const morgan = require('morgan');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
const deliveryRoutes = require('./api/routes/delivery');
const fulfillmentRoutes = require('./api/routes/fulfillment');
const cartRoutes = require('./api/routes/cart');

const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(morgan('dev'));
app.use('/products',productRoutes);
app.use('/orders',orderRoutes);
app.use('/delivery',deliveryRoutes);
app.use('/fulfillment',fulfillmentRoutes);
app.use('/cart',cartRoutes);

app.use((req,res,next)=>{
    const error = new Error('something wrong');
    error.status404;
    next(error);
})

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    });

})
module.exports = app;
