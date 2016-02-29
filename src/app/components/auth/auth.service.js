(function() {
  'use strict';

  angular
    .module('ng-swapi')
    .factory('Auth', Auth);

  /** @ngInject */
  function Auth(Firebase, $firebaseAuth) {
    var _user;
    var _users = [{
      email: 'admin@email.com',
      password: 'admin',
    }];

    var service = {
      login: login,
      getUser: getUser,
    };

    return service;

    function login(data) {
      return new Promise(function(res, rej) {
        if (!data.email) return rej(Error('Email not given.'));
        if (!data.password) return rej(Error('Password not given.'));
        console.log(user);

        _users.forEach(function(user) {
          if (user.email == data.email && user.password == data.password) {
            _user = user;
            res(user);
            console.log(user);
          }
        });

        // return rej('User not found.');
      });
    }

    function getUser() {
      return _user;
    }
  }
})();
