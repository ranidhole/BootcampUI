'use strict';

angular.module('angularFullstack2App', ['angularFullstack2App.auth', 'angularFullstack2App.admin',
    'angularFullstack2App.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'btford.socket-io',
    'ui.router', 'ui.bootstrap', 'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);




  });
