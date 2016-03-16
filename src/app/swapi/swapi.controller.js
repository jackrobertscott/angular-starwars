(function() {
  'use strict';

  angular
    .module('ng-swapi')
    .controller('SwapiController', SwapiController);

  /** @ngInject */
  function SwapiController($log, currentAuth, util, People, Planet, Starship, $stateParams, $state) {
    var vm = this;

    vm.swapi = null;
    vm.swapis = [];
    vm.errors = util.errors;
    vm.people = null;
    vm.planets = null;
    vm.starships = null;
    vm.initials = initials;
    vm.current = null;

    activate();

    /**
     * Controller init functions
     */
    function activate() {
      util.reset();

      if (!$stateParams.id) {
        vm.people = People.get();
        vm.planets = Planet.get();
        vm.starships = Starship.get();
      } else {
        if ($state.is('base.person')) {
          vm.current = People.get({id: $stateParams.id});
        } else if ($state.is('base.planet')) {
          vm.current = Planet.get({id: $stateParams.id});
        } else if ($state.is('base.starship')) {
          vm.current = Starship.get({id: $stateParams.id});
        } else {
          $log.error('Id not set!');
        }
      }
    }

    function initials(str) {
      return str.replace(/[a-z, ]/g, '');
    }
  }
})();
