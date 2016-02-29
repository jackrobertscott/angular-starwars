(function() {
  'use strict';

  angular
    .module('ng-swapi')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('base.swapi', {
        url: '/swapi',
        templateUrl: 'app/swapi/swapi.many.html', // use suffix '.html' instead of '.jade' as it accesses redered version
        controller: 'SwapiController',
        controllerAs: 'vm',
      });
  }
})();
