// Modules to control application life and create native browser window
const {
	app,
	BrowserWindow,Menu 
} = require('electron')
const path = require('path')

function createWindow() {
	//隐藏默认自带的左侧菜单栏
	 Menu.setApplicationMenu(null);

	// Create the browser window.
	const mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		// 顶部菜单栏隐藏
		// frame:false,
		// titleBarStyle: 'hidden',
		// titleBarOverlay: {
		// 	color: '#2f3241',
		// 	symbolColor: '#74b1be',
		// 	height: 49
		// },
		webPreferences: {
			preload: path.join(__dirname, 'preload.js')
		}
	})
	
	

	// and load the index.html of the app.
	mainWindow.loadFile('dist/index.html') //、注意该入口文件可以自由更改，但是在该文件内需要引入根目录的 renderer.js 文件
	// mainWindow.loadFile('index.html')  //这种类似于把dist内的文件全都放到根目录了

	// Open the DevTools.
	// 调试工具
	mainWindow.webContents.openDevTools()
	 // mainWindow.webContents.openDevTools();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
	createWindow()

	app.on('activate', function() {
		// On macOS it's common to re-create a window in the app when the
		// dock icon is clicked and there are no other windows open.
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	})
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function() {
	if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
