'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:EulerCtrl
 * @description
 * # EulerCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('EulerCtrl', function ($scope) {
    
    var isprime = function(num){
      if(num % 2 === 0 && num > 2){
        return false;
        
      }
      for(i in range(3, Math.sqrt(num))){
        if(num % i === 0){
          return false;
          
        }
      }
      
      return true;
    };


    $scope.euler = function(){
      var a = 2;
      var psum = 0;
      var limit = 2000000;
      for(i in range(a, limit)){
        if(isprime(a) == True){
          psum += a;
          console.log("Sum so far: " + psum.toString());
          
        }
        a++;
      }
      console.log("The sum is" + psum.toString());
      
    };
  });
