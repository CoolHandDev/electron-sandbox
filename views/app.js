/**
 *
 */
(function() {
    'use strict';

    /**
     * Entry point
     */
    angular.module('electronsandbox.main', ['ngMaterial']);

    /**
     * Main controller
     */
    angular.module('electronsandbox.main').controller('electronsandbox.main.ctrl', maincontroller);

    function maincontroller() {
        var self = this;

        self.activeText = 'Angular is running';
        self.sendAMessage = sendAMessage;

        ipcRenderer.on('async-reply', function(event, arg) {
            console.log(arg);
        })
        ipcRenderer.send('async-msg', 'message from renderer');

        function sendAMessage() {
            ipcRenderer.send('async-msg', {test:'test object from renderer'});
            console.log(require('electron').remote.getGlobal('testModel').userName);
            console.log(process.type);
        }
    }
})();