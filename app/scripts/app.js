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
      .otherwise({
        redirectTo: '/'
      });
  }]);
