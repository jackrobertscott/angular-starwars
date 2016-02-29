(function() {
  'use strict';

  angular
    .module('ng-swapi')
    .controller('BaseController', BaseController);

  /** @ngInject */
  function BaseController($log, util, $state, Auth, FIREBASE_ROOT) {
    var vm = this;

    vm.errors = util.errors;
    vm.logout = logout;

    activate();

    /**
     * Controller init functions
     */
    function activate() {
    }

    /**
     * Logout of firebase account
     */
    function logout() {
      Auth.logout();
      $log.log('logged out');
      $state.go('main');
    }
  }
})();
