(function() {
  'use strict';

  angular
    .module('ng-swapi')
    .factory('People', People);

  People.$inject = ['$resource'];

  /* @ngInject */
  function People($resource) {
    return $resource('http://swapi.co/api/people/:id/', {
      id: '@id'
    });
  }
})();
