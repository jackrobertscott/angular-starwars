(function() {
  'use strict';

  angular
    .module('ng-swapi')
    .controller('SwapiController', SwapiController);

  /** @ngInject */
  function SwapiController($log, currentAuth, util, SwapiFactory, FIREBASE_ROOT) {
    var vm = this;

    vm.swapi = null;
    vm.swapis = [];
    vm.errors = util.errors;

    activate();

    /**
     * Controller init functions
     */
    function activate() {
      util.reset();
    }
  }
})();
