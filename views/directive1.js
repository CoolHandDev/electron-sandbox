'use strict';
/**
 * 
 */
(function(app) {
    'use strict';

    app.directive('directive1', [directive1])

    function directive1() {
        return {
            restrict: 'E',
            scope: {},
            controller: directive1Ctrl,
            controllerAs: 'selfCtrl',
            templateUrl: './directive1.html',
            bindToController: true
        }

        function directive1Ctrl() {
            this.directive1Value = 'Hi I am directive1';
        }
    }
})(angular.module('electronsandbox.main'));