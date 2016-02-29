(function() {
  'use strict';

  angular
    .module('ng-swapi')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/login.html', // use suffix '.html' instead of '.jade' as it accesses redered version
        controller: 'MainController',
        controllerAs: 'vmMC',
      });
  }
})();
