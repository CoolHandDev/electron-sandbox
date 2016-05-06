(function() {
    'use strict';

    //Angular app entry point
    angular.module('electronsandbox.main', []);

    //Main window controller
    angular.module('electronsandbox.main').controller('electronsandbox.main.ctrl', maincontroller);

    function maincontroller() {
        var self = this;

        this.activeText = 'Angular is running';
    }

})();