(function() {
    'use strict';

    //Angular app entry point
    angular.module('electronsandbox.main', ['ngMaterial']);

    //Main window controller
    angular.module('electronsandbox.main').controller('electronsandbox.main.ctrl', maincontroller);

    function maincontroller() {
        var self = this;

        this.activeText = 'Angular is running';

        ipcRenderer.on('async-reply', function(event, arg) {
            console.log(arg);
        })
        ipcRenderer.send('async-msg', 'message from renderer');
    }
})();