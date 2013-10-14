'use strict';

angular.module('lawyerEw', [])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html'
      })
      .when('/areasOfPractice', {
        templateUrl: 'views/areasOfPractice.html'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/disclaimer', {
        templateUrl: 'views/disclaimer.html'
      })
      .when('/messageSent', {
        templateUrl: 'views/messageSent.html',
        controller: 'MessageSentCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
