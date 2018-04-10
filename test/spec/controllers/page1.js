'use strict';

describe('Controller: Page1Ctrl', function () {

  // load the controller's module
  beforeEach(module('portfolioApp'));

  var Page1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Page1Ctrl = $controller('Page1Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Page1Ctrl.awesomeThings.length).toBe(3);
  });
});
