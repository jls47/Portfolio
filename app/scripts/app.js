'use strict';

/**
 * @ngdoc overview
 * @name portfolioApp
 * @description
 * # portfolioApp
 *
 * Main module of the application.
 */
angular
  .module('portfolioApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/euler', {
        templateUrl: 'views/euler.html',
        controller: 'EulerCtrl',
        controllerAs: 'euler'
      })
      .when('/page1', {
        templateUrl: 'views/page1.html',
        controller: 'Page1Ctrl',
        controllerAs: 'page1'
      })
      .when('/page2', {
        templateUrl: 'views/page2.html',
        controller: 'Page2Ctrl',
        controllerAs: 'page2'
      })
      .when('/page3', {
        templateUrl: 'views/page3.html',
        controller: 'Page3Ctrl',
        controllerAs: 'page3'
      })
      .when('/page4', {
        templateUrl: 'views/page4.html',
        controller: 'Page4Ctrl',
        controllerAs: 'page4'
      })
      .when('/page5', {
        templateUrl: 'views/page5.html',
        controller: 'Page5Ctrl',
        controllerAs: 'page5'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
