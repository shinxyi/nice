var myApp = angular.module('myApp', ['ngRoute', 'ngMessages']);
//  use the config method to set up routing:
myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/players',{
      templateUrl: '/partials/players.html',
      controller: 'playersController'
    })
    .when('/teams',{
      templateUrl: '/partials/teams.html',
      controller: 'teamsController'
    })
    .when('/associations',{
      templateUrl: '/partials/associations.html',
      controller: 'associationsController'
    })
    .when('/:teamname',{
      templateUrl: '/partials/team.html',
      controller: 'teamController'
    })
    .otherwise({
      redirectTo: '/players'
    });
});
