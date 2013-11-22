'use strict';

angular.module('lawyerEw')
  .service('SendgridService', function ($http) {
    return {
      sendMessage: function(contact) {
        //console.log('in SendGridService');
        var result = $http.post('/contact', contact);
        result.error(function(error) {
          console.log('SendGrid post error:');
          console.log(error);
        });
//        }).success(function(user) {
//          console.log('post successful');
//          console.log(user);
//        });
        return result;
      }
    };
//    // AngularJS will instantiate a singleton by calling "new" on this function
//    this.sendMessage = function(contact) {
//      console.log("in SendGridService");
//      var result = $http.post('/contact', contact);
//      result.success(function(user) {
//        console.log("post successful");
//      }).error(function(error) {
//          console.log("post error");
//        });
//      return result;
//    };
  });
