var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/friends', { //show all friends
      templateUrl: '../partials/index.html',
      controller: 'newController'
    })
    .when('/friends/:id',{ //show one friend
      templateUrl: '../partials/friend.html',
      controller: 'editController'
    })
    .when('/edit/:id', { //edit page for one friend
      templateUrl: '../partials/edit.html',
      controller: 'editController'
    })
    .when('/new', { //add a friend
      templateUrl: '../partials/new.html',
      controller: 'newController'
    })
    .otherwise({
      redirectTo: '/friends'
    });
});
