'use strict';

describe('Controller: Page2Ctrl', function () {

  // load the controller's module
  beforeEach(module('portfolioApp'));

  var Page2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Page2Ctrl = $controller('Page2Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Page2Ctrl.awesomeThings.length).toBe(3);
  });
});
