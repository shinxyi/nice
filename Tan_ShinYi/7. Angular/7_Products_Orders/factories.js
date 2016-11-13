
app.factory('productFactory', function (){
  var products = [{name:'Keyboard', price: 149.99, qty: 50},{name:'Mouse', price: 59.99, qty: 50},{name:'Basketball', price: 21.99, qty:50}];
  var factory = {};
  factory.index = function (callback){
      callback(products);
  }

  factory.add = function(product){
    products.push(product);
  }

  factory.update = function(index){
    if(products[index].qty===0){
      return;
    }else{
      products[index].qty--;
    }
  }

  factory.delete = function(index){
    products.splice(index, 1);
  }

  return factory;
});
