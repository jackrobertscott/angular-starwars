(function() {
  'use strict';

  angular
    .module('ng-swapi')
    .factory('Auth', Auth);

  /** @ngInject */
  function Auth($cookies) {
    var _users = [{
      email: 'admin@email.com',
      password: 'admin',
    }];

    var service = {
      login: login,
      logout: logout,
      getUser: getUser,
    };

    return service;

    function login(data) {
      return new Promise(function(res, rej) {
        if (!data.email) return rej(Error('Email not given.'));
        if (!data.password) return rej(Error('Password not given.'));

        _users.forEach(function(user) {
          if (user.email == data.email && user.password == data.password) {
            $cookies.putObject('auth', user);
            res(user);
          }
        });
      });
    }

    function logout() {
      $cookies.remove('auth');
    }

    function getUser() {
      return $cookies.getObject('auth');
    }
  }
})();
