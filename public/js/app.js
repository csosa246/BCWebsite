'use strict';

//Declare app level module which depends on filters, and services
angular.module('myApp', ['ui.bootstrap', 'myApp.filters', 'myApp.services', 'myApp.directives']).
    config(function ($routeProvider, $locationProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'partials/home',
                controller: HomeViewController,
            }).
            when('/work', {
                templateUrl: 'partials/work',
                controller: WorkViewController,
            }).
            when('/music', {
                templateUrl: 'partials/music',
                controller: MusicViewController
            }).
            when('/design', {
                templateUrl: 'partials/design',
                controller: DesignViewController
            }).
            otherwise({
                redirectTo: '/home'
            });
        $locationProvider.html5Mode(true);
    });