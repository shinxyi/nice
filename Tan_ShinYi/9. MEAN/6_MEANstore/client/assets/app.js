var app = angular.module('app', ['ngRoute', 'angularMoment']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/customers', {
      templateUrl: '../partials/Customers.html',
      controller: 'customersController'
    })
    .when('/products',{
      templateUrl: '../partials/Products.html',
      controller: 'productsController'
    })
    .when('/show/:id',{
      templateUrl: '../partials/Product.html',
      controller: 'productController'
    })
    .when('/orders',{
      templateUrl: '../partials/Orders.html',
      controller: 'ordersController'
    })
    .when('/dashboard',{
      templateUrl: '../partials/Dashboard.html',
      controller: 'dashController'
    })
    .otherwise({
      redirectTo: '/customers'
    });
});
