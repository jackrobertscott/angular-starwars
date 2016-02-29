(function() {
  'use strict';

  angular
    .module('ng-swapi')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, util, Auth, FIREBASE_ROOT, $state) {
    var vm = this;

    vm.errors = util.errors;
    vm.login = login;

    activate();

    /**
     * Controller init functions
     */
    function activate() {
    }

    /**
     * Login user
     */
    function login(form, data) {
      util.reset();

      if (util.checkForm(form)) {
        Auth.login({
            email: data.email,
            password: data.password,
          })
          .then(function(user) {
            $log.debug('Logged in user: ' + user.email);
            $state.go('base.swapi');
          })
          .catch(util.failure);
      }
    }
  }
})();
