(function() {
  'use strict';

  angular
    .module('ng-swapi')
    .directive('slideRight', slideRight);

  /* @ngInject */
  function slideRight() {
    var directive = {
      restrict: 'A',
      link: linkFunc,
    };

    return directive;

    function linkFunc(scope, el, attr, ctrl) {
      /**
       * jQuery code for dashboard sliders
       */
      var _on = false;
      $(el).click(function() {
        var _rent = $(this).parent().find('ul');
        var _num = _rent.children().length;
        var _pos = parseInt(_rent.css('margin-left'), 10);
        if (!_on && _pos + (_num * 275) - 825 > 0) {
          _on = true;
          _rent.animate({
            'margin-left': '-=275px'
          }, function() {
            _on = false;
          });
        }
      });
    }
  }
})();

(function() {
  'use strict';

  angular
    .module('ng-swapi')
    .directive('slideLeft', slideLeft);

  /* @ngInject */
  function slideLeft() {
    var directive = {
      restrict: 'A',
      link: linkFunc,
    };

    return directive;

    function linkFunc(scope, el, attr, ctrl) {
      /**
       * jQuery code for dashboard sliders
       */
      var _on = false;
      $(el).click(function() {
        var _rent = $(this).parent().find('ul');
        var _num = _rent.children().length;
        var _pos = parseInt(_rent.css('margin-left'), 10);
        if (!_on && _pos < 0) {
          _on = true;
          _rent.animate({
            'margin-left': '+=275px'
          }, function() {
            _on = false;
          });
        }
      });
    }
  }
})();
