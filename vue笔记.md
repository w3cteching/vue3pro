

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



>  sass在window上的安装问题
>
> 等待安装。。。

```
解决方案：
npm install -g --production windows-build-tools

然后再创建vue项目

vue create 项目名
```



> Eslint 代码检验--公司肯定是开启

  Eslint官网：https://eslint.org/

Eslint中文文档：https://cn.eslint.org/



> Eslint报错举例：

```
/Users/haojinli/Desktop/testvuepro/src/main.js
   6:1  error  Expected space or tab after '//' in comment  spaced-comment
   9:1  error  Expected space or tab after '//' in comment  spaced-comment
  10:1  error  Expected space or tab after '//' in comment  spaced-comment

✖ 3 problems (3 errors, 0 warnings)
  3 errors and 0 warnings potentially fixable with the `--fix` option.
```



## 解决方案：

1. 手动解决错误

    报错信息中包括：报错的文件路径，报错文件的行号/列号，报错信息，报错规则

2. 通过vs code解析错误：通过在vs code安装Es-lint插件来修复格式错误

3. 通过Eslint --fix来修复

4. 通过配置规则解决错误





> svg

> 数据接口:

https://wap.365msmk.com/index







token= Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3Rlc3QuMzY1bXNtay5jb20vYXBpL2FwcC9sb2dpbiIsImlhdCI6MTU4OTc4ODQyNywiZXhwIjoxNTkwMDkwODI3LCJuYmYiOjE1ODk3ODg0MjcsImp0aSI6IndWT3czcjE2VjBzMklBZEsiLCJzdWIiOjMwOSwicHJ2IjoiOWYxZmU5ZTBkZmZiZTQ0NDJkYzc4MzEwNzUxZjU5MWNmNGQxNDAyMCJ9.wSP5E09n3TfcdrlPrrbAzPOsIHhI5lpNIBeNmjgxxVI





获取手机验证码接口：https://test.365msmk.com/api/app/smsCode

请求方式：post

请求参数：

| 参数名   | 参数含义       | 参数值           |
| -------- | -------------- | ---------------- |
| mobile   | 要填入的手机号 | 11手机号         |
| sms_type | 登录类型       | 验证码登录 login |
|          |                |                  |



登录接口：https://test.365msmk.com/api/app/login

请求方式：post

请求参数：

| 参数名   | 参数含义       | 参数值          |
| -------- | -------------- | --------------- |
| mobile   | 要填入的手机号 | 11手机号        |
| sms_code | 要输入的验证码 | 手机的验证码    |
| type     | 登录类型       | 2为验证登录登录 |