'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.clicked = false;

    $scope.menu = function(){
      if($scope.clicked === false){
        $scope.clicked = true;
      }else{
        $scope.clicked = false;
      };
    };
   
  });
