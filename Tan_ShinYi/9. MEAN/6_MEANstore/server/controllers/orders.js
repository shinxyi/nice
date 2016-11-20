var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');


console.log('orders controller');

function OrdersController(){

  this.index = function(req,res){
    Order.find({}, function(err, orders){
      if(err){
        console.log('cannot index orders');
      }else{
        res.json(orders);
      }
    })
  }

  this.create = function(req,res){
    console.log('Order is being saved!!!', req.body);

    var order = new Order(req.body);
    order.save(function(err, order){
      if(err){
        var errors = [];

        for(var key in err.errors){
          errors.push(err.errors[key].message);
        }

        if(err.errmsg){
          errors.push("There's already an Order with this name!");
        }
        console.log(errors);
        res.json({errors: errors});
      }else{
        Product.findOne({_id:req.body.product_id}, function(err,product){
          if(err){
            console.log('cannot find product to update order info on');
          }else{
            product.quantity -= req.body.quantity;
            product.save(function(err, updatedProduct){
              if(err){
                console.log('cannot update product quantity')
              }
            })
          }
        })
        res.json(order);
      }
    })
  };

  this.destroy = function(req, res){
    console.log(req.body);
    Order.remove({_id: req.params.id},function(err){
      if(err){
        res.json({errors: 'Order to be deleted cannot be found.'});
      }else{
        Product.findOne({_id:req.body.product_id}, function(err, product){
          console.log('TRYING TP FIND PRODUCT TO UPDATE!!!');
          if(err){
            console.log('cannot update product associated with deleted order');
          }else{
            product.quantity += req.body.quantity;
            product.save(function(err, updatedProduct){
              if(err){
                console.log('cannot update product quantity')
              }
            })
          }
        })
        res.json({success: 'Order has been deleted!'})
      }
    })
  };
}

module.exports = new OrdersController();
