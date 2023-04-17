# electron-builder-templete

#### Description
这是一个使用electron和electron-builder对前端静态文件进行打包成exe文件的模板
一个基本的Electron应用程序只需要这些文件：

-`package.json`-指向应用程序的主文件并列出其详细信息和依赖项。

-`main.js`-启动应用程序并创建一个浏览器窗口来呈现HTML。这是应用程序的**主进程**。

-`index.html`-要呈现的网页。这是应用程序的**渲染器进程**。

-`preload.js`-在加载渲染器进程之前运行的内容脚本。

## To Use


```bash
# Clone this repository
git clone https://github.com/electron/electron-builder-templete

# Go into the repository
cd electron-builder-templete

# Install dependencies
npm/yarn install

# Run the app
npm/yarn start

#build the app

npm/yarn run electron:build
```

注意，如果是vue或者其他项目打成的dist包，一定要在打包之前修改一下vue项目的静态资源打包后的加载路径改成 [  ./  ]

```
找到vue.config.js进行修改文件加载路径：
export default defineConfig({
  plugins: [vue()],
  // base: path.resolve(__dirname, './dist/'), // 之前的
  base: './', // 修改后的-->修改的这里
  server: {
    port: 8888,
    cors: true, // 允许跨域
    hmr: true, // 开启热更新
  },
})
```
## Resources for Learning Electron

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [Electron Fiddle](https://electronjs.org/fiddle) - Electron Fiddle, an app to test small Electron experiments
