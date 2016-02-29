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
  function checkAuth($log, $rootScope, $state, Auth, FIREBASE_ROOT) {
    $rootScope.$on('$stateChangeStart', function(event, toState) {
      var auth = Auth.get(FIREBASE_ROOT);

      // If the state requires authetication and not logged in then redirect
      if (toState.data && toState.data.authenticate && !auth.$getAuth()) {
        event.preventDefault();
        $log.error('Access denied: page requires user to be authenticated');
        $state.go('main');
      }
    });

    /**
     * jQuery code for dashboard sliders
     */
    var _on = false;
    $('.left').click(function() {
      var _rent = $(this).parent().find('ul');
      var _num = _rent.children().length;
      var _pos = parseInt(_rent.css('margin-left'), 10);
      if (!_on && _pos + (_num * 275) - 825 > 0) {
        _on = true;
        _rent.animate({'margin-left': '-=275px'}, function() {
          _on = false;
        });
      }
    });
    $('.right').click(function() {
      var _rent = $(this).parent().find('ul');
      var _num = _rent.children().length;
      var _pos = parseInt(_rent.css('margin-left'), 10);
      if (!_on && _pos < 0) {
        _on = true;
        _rent.animate({'margin-left': '+=275px'}, function() {
          _on = false;
        });
      }
    });
  }
})();
