'use strict';

//Declare app level module which depends on filters, and services
angular.module('myApp', ['ui.bootstrap','myApp.filters', 'myApp.services', 'myApp.directives']).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/home', {
      templateUrl: 'partials/home',
    }).
    when('/work', {
      templateUrl: 'partials/work',
    }).
    when('/music', {
      templateUrl: 'partials/music',
    }).
    otherwise({
      redirectTo: '/home'
    });

  $locationProvider.html5Mode(true);
});

