console.log('order model');
var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
 customer: {
        type: String,
        required: [true, "Customer is Required!"]
      },
 customer_id: {
        type: String,
        required: [true]
      },
 product: {
           type: String,
           required: [true, "Product is Required!"],
           trim: true
         },
 product_id: {
           type: String,
           required: [true]
         },
 quantity: {
        type: Number,
        required: [true, "Quantity is Required!"]
      }
},{timestamps: true});

var Order = mongoose.model('Order', orderSchema); // We are setting this Schema in our Models as 'User'
