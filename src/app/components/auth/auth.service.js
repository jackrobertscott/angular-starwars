(function() {
  'use strict';

  angular
    .module('ng-swapi')
    .factory('Auth', Auth);

  /** @ngInject */
  function Auth(Firebase, $firebaseAuth) {
    var service = {
      get: get,
    };

    return service;

    function get(url) {
      var ref = new Firebase(url);
      return $firebaseAuth(ref);
    }
  }
})();
