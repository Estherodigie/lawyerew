'use strict';

describe('Controller: MessageSentCtrl', function () {

  // load the controller's module
  beforeEach(module('lawyerEw'));

  var MessageSentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MessageSentCtrl = $controller('MessageSentCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
