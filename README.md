# Quasar App (allst-quasar-electron)

A Quasar Framework app

## Install the dependencies
```bash
npm install

npm run dev 运行
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
npm run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

### 依赖包安装
1、安装axios
npm install axios
Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中
中文官方文档：http://axios-js.com/zh-cn/docs/


2、安装qs
qs 是一个增加了一些安全性的查询字符串解析和序列化字符串的库。
npm install qs


###
echo "# allst-quasar-electron" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ReturnTears/allst-quasar-electron.git
git push -u origin main

git remote add origin https://github.com/ReturnTears/allst-quasar-electron.git
git branch -M main
git push -u origin main


### Quasar组件使用注意事项
1、使用QTable报错No data available
在新版本中应该使用rows属性，将data属性替换为rows属性

