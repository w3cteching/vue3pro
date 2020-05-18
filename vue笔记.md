# 一、vue版本情况

vue最新版本：2.6

vue-cli:最新4.x

vue-devtools:5.3.3



二、统一用vue-cli 3.x脚手架写项目

```
vue-cli官网：https://cli.vuejs.org/zh/
```



> 安装vue-cli

```
npm install -g @vue/cli
```

> 创建项目

```
vue create 项目名
 或
vue ui
```



```
查看vue脚手架的版本：vue -V
```



> 具体创建项目步骤：



> 第一步：vue create 项目名，然后按照步骤去执行

```
? Please pick a preset:  
❯ default (babel, eslint)   //回车自动安装脚手架需要的各种包
  Manually select features  //手动安装，需要自己配置选择各种要安装的包
```

  

> 第二步：安装好后进入项目目录并运行

```
 $ cd 项目目录
 $ yarn serve 或npm run serve  //运行
```



> vue-cli 3.x+通过vue.config.js来实现脚手架的环境配置

```js
配置跨域选项：

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  }
}
```



> 手机上测试项目



```
要保证手机和电脑在同一个wifi环境下
运行项目：npm run serve
查找到项目所在电脑的ip地址：
 App running at:
  - Local:   http://localhost:9999/ 
  - Network: http://192.168.4.162:9999/  //手机上可以访问的
```



> 手机端开发：如何做适配



```
前端主流适配方案：rem【推荐】,vw,vh,flex布局,百分比，媒体查询

rem适配方案：
1.https://github.com/amfe/lib-flexible
2.通过rem.js文件来动态设置

```



> 全局样式



```
reset.css
官方地址：https://meyerweb.com/eric/tools/css/reset/
```





> 工程目录？

https://lq782655835.github.io/blogs/team-standard/recommend-vue-project-structure.html