(function() {
  'use strict';

  angular
    .module('ng-swapi')
    .factory('Starship', Starship);

  Starship.$inject = ['$resource'];

  /* @ngInject */
  function Starship($resource) {
    return $resource('http://swapi.co/api/starships/:id/', {
      id: '@id'
    });
  }
})();
