console.log('routes');
var customers = require('../controllers/customers.js');
var products = require('../controllers/products.js');
var orders = require('../controllers/orders.js');

module.exports = function(app){
  app.post('/create', customers.create);
  app.get('/index', customers.index);
  app.delete('/destroy/:id', customers.destroy);

  app.post('/newProduct', products.create);
  app.get('/getProducts', products.index);
  app.get('/show/:id', products.product);
  app.post('/show/:id', products.update);
  app.delete('/destoryProduct/:id', products.destroy);

  app.post('/newOrder', orders.create);
  app.get('/getOrders', orders.index);
  app.post('/orders/:id', orders.destroy);
}
