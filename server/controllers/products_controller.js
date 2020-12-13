const Product = require('../models/product');

module.exports = {
    readAllProducts(req, res) {
    //When using mongoose, use exec method to catch & respond to errors & resolve promise.
      Product.find({}).exec((err, products) => {
        if(err) console.log('Get Product Mongoose Error------------------', err);
        console.log('products-------------', products);
        res.status(200).json({products});
      });
    },

    readProduct(req, res) {
      //Destructs id from endpoint and assigns it to const id. 1 product
      const { id } = req.params;
      //Copy and paste one of the product's id to the url when testing it.
      //Use the findById to get a specific product.
      Product.findById(id).exec((err, product) => {
        if(err) console.log('Get Single Product Error---------------', err);
        console.log('product--------------', product);
        res.status(200).json({product});
      })
    }
}