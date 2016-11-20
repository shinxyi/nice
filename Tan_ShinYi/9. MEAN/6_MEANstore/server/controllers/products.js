var mongoose = require('mongoose');
var Product = mongoose.model('Product');

console.log('customer controller');

function ProductsController(){

  this.index = function(req,res){
    Product.find({}, function(err, products){
      if(err){
        console.log('cannot index custmoers');
      }else{
        res.json(products);
      }
    })
  }

  this.create = function(req,res){
    console.log('product is being created!!!', req.body);
    var product = new Product(req.body);
    product.save(function(err, product){
      if(err){
        var errors = [];

        for(var key in err.errors){
          errors.push(err.errors[key].message);
        }

        console.log(errors);
        res.json({errors: errors});
      }else{
        res.json(product);
      }
    })
  };

  this.product = function(req,res){
    Product.findOne({_id: req.params.id}, function(err, product){
        if(err){
          console.log('cannot find product');
        }else{
          res.json(product);
        }
      });
  }

  this.update = function(req,res){
    console.log('MADE IT TO UPDATE')
    Product.findOne({_id: req.params.id}, function(err, product){
        product.name = req.body.name;
        product.img = req.body.img;
        product.description = req.body.description;
        product.quantity = req.body.quantity;
        product.save(function(err){
          if(err){
            var errors = [];

            for(var key in err.errors){
              errors.push(err.errors[key].message);
            }

            console.log(errors);
            res.json({errors: errors});
          }else{
            res.json(product);
          }
        })
      });
  }

  //TO_DO: NEED TO ADD UPDATE METHOD!!!!!!

  this.destroy = function(req, res){
    console.log('!!!!!!', req.params.id);
    Product.remove({_id: req.params.id},function(err){
      if(err){
        console.log('Product to be deleted cannot be found.');
      }else{
        console.log('Product has been deleted!');
      }
    })
  };
}

module.exports = new ProductsController();
