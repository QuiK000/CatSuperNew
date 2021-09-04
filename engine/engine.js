const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const mainWindow = new BrowserWindow({ width: 375, height: 667, webPreferences: { nodeIntegration: true }, resizable: false })

  mainWindow.setMenuBarVisibility(false)
  mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => BrowserWindow.getAllWindows().length === 0 ? createWindow() : null)
})

app.on('window-all-closed', () => process.platform !== 'darwin' ? app.quit() : null)