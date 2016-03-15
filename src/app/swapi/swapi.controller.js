(function() {
  'use strict';

  angular
    .module('ng-swapi')
    .controller('SwapiController', SwapiController);

  /** @ngInject */
  function SwapiController($log, currentAuth, util, People, Planet, Starship) {
    var vm = this;

    vm.swapi = null;
    vm.swapis = [];
    vm.errors = util.errors;
    vm.people = null;
    vm.planets = null;
    vm.starships = null;
    vm.initials = initials;

    activate();

    /**
     * Controller init functions
     */
    function activate() {
      util.reset();

      vm.people = People.get();
      vm.planets = Planet.get();
      vm.starships = Starship.get();
    }

    function initials(str) {
      return str.replace(/[a-z, ]/g, '');
    }
  }
})();
