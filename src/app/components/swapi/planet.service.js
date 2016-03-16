(function() {
  'use strict';

  angular
    .module('ng-swapi')
    .factory('Planet', Planet);

  Planet.$inject = ['$resource'];

  /* @ngInject */
  function Planet($resource) {
    return $resource('http://swapi.co/api/planets/:id/', {
      id: '@id'
    });
  }
})();
