(function() {
  'use strict';

  angular
    .module('ng-swapi')
    .run(checkAuth);

  /**
   * This function will check if a given state requires the user to be authenticated.
   * If it does require authentication, and use not authenticated then will be redirected.
   */
  /** @ngInject */
  function checkAuth($log, $rootScope, $state, Auth, jQuery) {
    $rootScope.$on('$stateChangeStart', function(event, toState) {
      // If the state requires authetication and not logged in then redirect
      if (toState.data && toState.data.authenticate && !Auth.getUser()) {
        event.preventDefault();
        $log.error('Access denied: page requires user to be authenticated');
        $state.go('main');
      }
    });
  }
})();
