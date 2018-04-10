'use strict';

describe('Controller: Page5Ctrl', function () {

  // load the controller's module
  beforeEach(module('portfolioApp'));

  var Page5Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Page5Ctrl = $controller('Page5Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Page5Ctrl.awesomeThings.length).toBe(3);
  });
});
