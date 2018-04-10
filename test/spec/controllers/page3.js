'use strict';

describe('Controller: Page3Ctrl', function () {

  // load the controller's module
  beforeEach(module('portfolioApp'));

  var Page3Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Page3Ctrl = $controller('Page3Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Page3Ctrl.awesomeThings.length).toBe(3);
  });
});
