(function() {
  'use strict';

  angular
    .module('ng-swapi')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Toggle debug logs
    $logProvider.debugEnabled(true);
  }
})();
