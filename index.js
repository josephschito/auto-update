const { app, BrowserWindow } = require('electron')
const { autoUpdater } = require("electron-updater")
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  process.log.transports.file.level = "debug"
  autoUpdater.logger = process.log
  autoUpdater.checkForUpdatesAndNotify()
  createWindow()
})
