import { ipcMain } from 'electron';
//  创建窗口
import { closeWindow, createNoteBrowserWindow, hideWindow, findWindowById } from '@/main/utils/browserWindow';

//  打开browserWindow
ipcMain.on('browser-window-open', (event, result) => {
  const { type, params } = result;
  if (type === 'note') {
    createNoteBrowserWindow(...params);
  }
});

//  关闭browserWindow
ipcMain.on('browser-window-close', (event, windowId) => {
  if (windowId) {
    closeWindow(windowId);
  }
});

//  隐藏browserWindow
ipcMain.on('browser-window-hide', (event, windowId) => {
  if (windowId) {
    hideWindow(windowId);
  }
});

//  渲染进程间通信
ipcMain.on('browser-window-communication', (event, { windowId, params, eventName }) => {
  const { win } = findWindowById(windowId);
  win.webContents.send(eventName, params);
});
