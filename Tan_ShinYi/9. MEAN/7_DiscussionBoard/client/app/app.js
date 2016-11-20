var app = angular.module('app', ['ngRoute','ngCookies', 'ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/loginreg', {
      templateUrl: 'assets/partials/loginreg.html',
      controller: 'userController'
    })
    .when('/dashboard',{
      templateUrl: 'assets/partials/dash.html',
      controller: 'dashController'
    })
    .when('/user/:userId',{
      templateUrl: 'assets/partials/user.html',
      controller: 'oneUserController'
    })
    .when('/topic/:topicId',{
      templateUrl: 'assets/partials/topic.html',
      controller: 'topicController'
    })
    .otherwise({
      redirectTo: '/loginreg'
    });
});
