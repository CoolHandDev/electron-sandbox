'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', function() {

    var windowConfig = {

    }

    // create main view
    mainWindow = new BrowserWindow();
    mainWindow.maximize(); //start the application as maximized

    // Launch entry-point view
    mainWindow.loadURL('file://' + __dirname + '/views/main.html');

    // Open the DevTools.
    //mainWindow.webContents.openDevTools();

    // Cleanup
    mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
});
