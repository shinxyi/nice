var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');

console.log('customer controller');

function CustomersController(){

  this.index = function(req,res){
    Customer.find({}, function(err, customers){
      if(err){
        console.log('cannot index custmoers');
      }else{
        res.json(customers);
      }
    })
  }

  this.create = function(req,res){
    console.log('user is being created!!!', req.body);

    var customer = new Customer(req.body);
    customer.save(function(err, customer){
      if(err){
        var errors = [];

        for(var key in err.errors){
          errors.push(err.errors[key].message);
        }

        if(err.errmsg){
          errors.push("There's already a customer with this name!");
        }
        console.log(errors);
        res.json({errors: errors});
      }else{
        res.json(customer);
      }
    })
  };

  this.destroy = function(req, res){
    var id= req.params.id;

    Customer.remove({_id: id},function(err){
      if(err){
        res.json({errors: 'Customer to be deleted cannot be found.'});
      }
      res.json({success: 'Customer has been deleted!'})
    })
  };
}

module.exports = new CustomersController();
