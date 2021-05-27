import { app } from 'electron';

//  https://blog.csdn.net/simplehouse/article/details/95502071
//  在描述文件里面添加全局属性无效，查过资料后只能在导入模块里声明
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface Global {
      rootPath: string;
      //  是否开发模式
      isDev: boolean;
      //  窗体/插件信息映射
      pluginWin: any;
      //  视图窗体ID映射
      viewWinMap: any;
    }
  }
}

global.isDev = process.env.NODE_ENV !== 'production';
global.rootPath = global.isDev ? __dirname : app.getPath('userData');

export {};
