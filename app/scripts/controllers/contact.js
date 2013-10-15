'use strict';

angular.module('lawyerEw')
  .controller('ContactCtrl', ['$scope', 'SendgridService', '$location', function ($scope, SendgridService, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.sendMessage = function() {
      //console.log('in FE:sendMessage');
      SendgridService.sendMessage(this.contact).success(function() {
        //console.log('sendMessage was a success');
//        console.log('name:', $scope.contact.name);
//        console.log('email:', $scope.contact.email);
//        console.log('phone:', $scope.contact.phone);
        $location.path('/messageSent');
      });

//      $scope.contact.name;
//      $scope.contact.email;
//      $scope.contact.message;
//

//      var payload   = {
//        to      : 'brettwiesner@gmail.com',
//        from    : 'contactPageSendButton@lawyerER.com',
//        subject : 'Test from send button',
//        text    : 'This message was sent by hitting the send button'
//      };
//
//      sendgrid.send(payload, function(err, json) {
//        if (err) { console.error(err); }
//        console.log(json);
//      });

    };

  }]);
