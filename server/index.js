require('dotenv').config();
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');

const adminController = require('./controllers/admin_controller');
const cloudinaryController = require('./controllers/cloudinary_controller');
const userController = require('./controllers/user_controller');
const productsController = require('./controllers/products_controller');

const mongoose = require('mongoose');
const express = require('express');

const app = express();
const PORT = 4000;

mongoose.connect(
    process.env.CONNECTION_STRING, 
    { useNewUrlParser: true },
    (err) => {
        if(err) {
            console.log('Data Base Error---------------', err);
        }
        console.log('Connected to database');
    }
);
console.log("GOT PAST MONGOOSE -------------");


app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14
    }
}));
app.use(cors());



    // Endpoints. Timeout so database connects before endpoints
setTimeout(() => {

    /* Currently no user controller

        // User Endpoints
    // Read user session data
    app.get('/api/user-data', userController.readUserData);
    // Add item to cart
    app.post('/api/user-data/cart', userController.addToCart);
    // Remove item from cart
    app.delete('/api/user-data/cart:id', userController.removeFromCart);
    // User Login Auth0
    app.post('/api/login', userController.login)
    // User Logout
    app.post('/api/logout', userController.logout);

    */

        // Products Endpoints
    // Get all products
    app.get('/api/products', productsController.readAllProducts);
    // Get specific product
    app.get('/api/products/:id', productsController.readProduct);

        // Admin Endpoints
    // Get admin users
    app.get('/api/users', adminController.getAdminUsers);
    // Create product
    app.post('/api/products', adminController.createProduct);
    // Update product
    app.put('/api/products/:id', adminController.updateProduct);
    // Delete product
    app.delete('/api/products/:id', adminController.deleteProduct);
    
}, 300)


app.listen(PORT, () => console.log('Listening on port:', PORT));