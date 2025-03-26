const { app, BrowserWindow } = require('electron');
function createWindow() {
  const { name } = require('./package.json');
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname + '/app.ico',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    autoHideMenuBar: true,
    title: name,
  });
  win.loadFile('index.html');
};
app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    };
  });
});
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  };
});