'use strict';

describe('Controller: ContactCtrl', function () {

  // load the controller's module
  beforeEach(module('lawyerEw'));

  var ContactCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactCtrl = $controller('ContactCtrl', {
      $scope: scope
    });
  }));

//  it('should send a test message', function () {
//
//    //
//
//    var sendgrid  = require('sendgrid')(
//      process.env.SENDGRID_USERNAME,
//      process.env.SENDGRID_PASSWORD
//    );
//
//    var payload   = {
//      to      : 'brettwiesner@gmail.com',
//      from    : 'test@test.com',
//      subject : 'Test message',
//      text    : 'This is a test message sent by the lawyerEW tester'
//    };
//
//    sendgrid.send(payload, function(err, json) {
//      if (err) {
//        console.error(err);
//        expect(false);
//      } else {
//        expect(true);
//      }
//    });
//
//  });

});
