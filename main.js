const { app, BrowserWindow } = require('electron');
const path = require('path');

// Auto-reload (watch for changes in the 'main.js' and 'renderer' files)
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 2450,
    height: 2780,
    icon: path.join(__dirname, 'icon.png'),
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('index.html');

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
