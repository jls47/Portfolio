'use strict';

describe('Controller: Page4Ctrl', function () {

  // load the controller's module
  beforeEach(module('portfolioApp'));

  var Page4Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Page4Ctrl = $controller('Page4Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Page4Ctrl.awesomeThings.length).toBe(3);
  });
});
