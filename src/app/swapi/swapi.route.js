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
      })
      .state('base.person', {
        url: '/person/:id',
        templateUrl: 'app/swapi/swapi.person.html', // use suffix '.html' instead of '.jade' as it accesses redered version
        controller: 'SwapiController',
        controllerAs: 'vm',
      })
      .state('base.planet', {
        url: '/planet/:id',
        templateUrl: 'app/swapi/swapi.planet.html', // use suffix '.html' instead of '.jade' as it accesses redered version
        controller: 'SwapiController',
        controllerAs: 'vm',
      })
      .state('base.starship', {
        url: '/starship/:id',
        templateUrl: 'app/swapi/swapi.starship.html', // use suffix '.html' instead of '.jade' as it accesses redered version
        controller: 'SwapiController',
        controllerAs: 'vm',
      });
  }
})();
