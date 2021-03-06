const Validation = require('../models/snipcartValidation');
const Product = require('../models/product');

module.exports = {
    getResponse(req, res) {
      //Destructs id from endpoint and assigns it to const id. 1 product
      const { id } = req.params;
      //Copy and paste one of the product's id to the url when testing it.
      //Use the findById to get a specific product.
      Product.findById(id).exec((err, product) => {
        if(err) console.log('Get Single Product Error---------------', err);
        console.log('product--------------', product);
        res.status(200).json(
          {
            id: product._id,
            price: product.price,
            url: 'https://frozen-garden-94356.herokuapp.com/api/snipcart/' + product._id
          }
          );

      })
    }
}