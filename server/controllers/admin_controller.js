const Product = require('../models/product');
const User = require('../models/user');

module.exports = {
    // Admin
    getAdminUsers(req, res) {
        User.find().exec((err, users) => {
            if (err) {
                console.log('Get Admin Users Error---------------', err);
            }
            res.status(200).json({users});
        })
    },

    // Products
    createProduct(req, res) {
        // MongoDB automatically generates id for created data
        const { name, description, price, featured, inventory, category, images } = req.body;

        let newProduct = new Product({
            name,
            description,
            price,
            featured,
            inventory,
            category,
            images
        })

        newProduct.save();
        res.status(200).json({product: newProduct});
    },

    updateProduct(req, res) {
        const { id } = req.params;
        const { name, description, price, featured, inventory, category, images } = req.body;

        Product.findById(id).exec((err, product) => {
            if (err) {
                console.log('Updated Product-----------------', err);
            }
            console.log("name is ", req.body);
            // Product is currently null...
            console.log("product is ", product);
            // Assigning data to req.body
            product.name = name;
            product.description = description;
            product.price = price;
            product.inventory = inventory;
            product.featured = featured;
            product.category = category;
            product.images = images;
            product.save();

            // Send back data for testing
            res.status(200).json({product});
        }) 
    },

    deleteProduct(req, res) {
        const { id } = req.params;

        Product.deleteOne({_id: id}).exec((err, product) => {
            if (err) {
                console.log('Delete One Error---------------', err);
            }
            res.status(200).json({product});
        })
    }
};