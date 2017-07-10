'use strict';

describe('Controller: EulerCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolioApp'));

  var EulerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EulerCtrl = $controller('EulerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EulerCtrl.awesomeThings.length).toBe(3);
  });
});
