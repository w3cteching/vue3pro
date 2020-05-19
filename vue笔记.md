

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



> svg

icon图标：

​     img，雪碧图,base64(将图片转换成base64),

​    字体图标,svg:可以灵活配置



   svg:

​     单个svg图:

		1. 通过img引入svg
  		2. 通过直接插入svg

例如：

```
<svg t="1589851025817" class="icon search" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2154" width="200" height="200"><path d="M908.6 883.1l-155-155c28.1-30.9 50.5-66 66.8-104.4 19.3-45.6 29-94 29-143.9 0-49.9-9.8-98.3-29-143.9-18.6-44-45.3-83.5-79.2-117.5-33.9-33.9-73.5-60.6-117.5-79.2-45.6-19.3-94-29-143.9-29-49.9 0-98.3 9.8-143.9 29-44 18.6-83.5 45.3-117.5 79.2s-60.6 73.5-79.2 117.5c-19.3 45.6-29 94-29 143.9 0 49.9 9.8 98.3 29 143.9 18.6 44 45.3 83.5 79.2 117.5s73.5 60.6 117.5 79.2c45.6 19.3 94 29 143.9 29 49.9 0 98.3-9.8 143.9-29 38.5-16.3 73.6-38.7 104.4-66.8l155 155c3.5 3.5 8.1 5.3 12.7 5.3s9.2-1.8 12.7-5.3c7.1-7.1 7.1-18.5 0.1-25.5z m-428.8-69.7c-184 0-333.6-149.7-333.6-333.6 0-184 149.7-333.6 333.6-333.6 184 0 333.6 149.7 333.6 333.6 0 184-149.6 333.6-333.6 333.6z" p-id="2155"></path></svg>
```

通过样式来调整，例如:

```
 .search {
      width:50px;
      fill:#f00;
}
```



   多个svg图合成：svg sprites



  第一步：从iconfont挑选图标加入购物并下载

  第二步：解压并打开xxx.html，找到symbol复制其中的svg代码

  第三步：粘贴到vue项目public中的index.html中

  第四步：使用svg



```
 <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-挑选的图标名"></use>
 </svg>
```



## vue路由

一、vue路由主要用于实现单页应用（SPA）

二、vue路由模式：history,hash(默认)

三、路由懒加载（让组件按需加载）



例如：

```
const Home = () => import('组件路径');
const Shopping = () => import('../views/shopping.vue');
const OrderList = () => import('../views/orderlist.vue');
const My = () => import('../views/my.vue');
```

四、路由的高亮显示

​	默认类名：

```
.router-link-active { //高亮样式 }
```

  自定义高亮类名:

```
需要在实例化路由中添加：
const router = new VueRouter({
  routes,
  linkActiveClass: 'active'  //添加自定义类名
});
```



## 数据请求

axios封装:基本不用封装，只是对请求的接口地址，超时，报错处理

```
安装axios
npm i axios -S

axios官方github仓库地址：https://github.com/axios/axios
```



1. 简洁语法:

```
//get语法语法
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
```

```
//post请求语法
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

```
function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

//可以用axios同时请求多个接口，类似于Promise.all()
axios.all([getUserAccount(), getUserPermissions()])
  .then(axios.spread(function (acct, perms) {
    // Both requests are now complete
  }));
```

2. axios通过配置对象来请求数据

```
//post请求
axios({
  url:'接口地址',
  baseURL：‘接口默认前缀地址’
  method:'post',
 // data:{  }, //传参,注意：post请求有可能会用qs库去转换
  data:qs.stringify(obj)
  headers:{'content-tpye':'application/x-www-form-urlencoded',......}, //请求头配置
  
});

例如：

import qs from 'qs';
const data = { 'bar': 123 };
const options = {
  method: 'POST',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  data: qs.stringify(data),
  url,
};
axios(options);

//get请求
axios({
  url:'接口地址',
  method:'get',
  params:{  }, //传参
  headers:{'content-tpye':'x-www-form-urlencoded',......}, //请求头配置
  
});
```



3. axios的默认配置

```
axios.defaults.baseURL = '默认接口域名url';
axios.defaults.headers['x-token'] = token值;  //添加token
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```



4. 创建axios实例

    ```
    const instance = axios.create({
      baseURL: '默认接口域名url',
      timeout:2500
    });
    
    //instance.defaults.timeout = 2500;  //给实例添加默认超时时间
    ```

5.axios拦截器

```
// 添加请求拦截
axios.interceptors.request.use(function (config) {
    //发送成功请求
    config.headers['x-token']=getToken()
    return config;
  }, function (error) {
    //发送错误请求的拦截
    return Promise.reject(error);
  });

// 添加响应拦截
axios.interceptors.response.use(function (res) {
    //成功返回
    if(res.code===2000) {
      
    }
    
    if(res.code===5000) {
      Tosst({
        title:'登录超时'
      })
      
      router.push({
      path:'/login'
      })
    }
    return res;
  }, function (error) {
    //失败返回
    return Promise.reject(error);
  });
```



业务接口的封装

环境地址

