(function() {
    'use strict';

    //Angular app entry point
    angular.module('electronsandbox.main', ['ngMaterial']);

    //Main window controller
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
            ipcRenderer.send('async-msg', 'message from clicking the button');
            console.log(require('electron').remote.getGlobal('testModel').userName);
        }
    }
})();