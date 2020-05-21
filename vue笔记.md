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



业务接口的封装：类似于咱们对微信小程序的接口封装思路



环境地址切换：



   一、环境切换简介：

​      听过录音，你肯定听说过你的项目有多个接口，开发时，如何进行接口地址的切换或管理？



   接口开发环境：

​     1.本地环境:

  ```
npm run serve  
自动走测试接口：https://test.365msmk.com/
  ```



​     2.测试环境

```
https://test.365msmk.com/
```



​      

​     3.灰度环境：只给部分用户测试使用（内测），若有问题，提出bug，再调整，直到用过一时间功能稳定下来

​    4.预发布环境：

​     4.生产环境

​    

```
当我npm run build时，自动走
https://www.365msmk.com/
```



二、环境接口地址切换的解决方案：

   1. vue官方脚手架解决方案：

      ```
      参考文档：https://cli.vuejs.org/zh/guide/mode-and-env.html
      ```

      

> 在项目的根目录下,创建.env.模式名来配置，例如：

```
.env.development
.env.production
在文件中添加
VUE_APP_自定义名称  //环境变量1
NODE_ENV=环境名称   //环境变量2
BASE_URL=URL

注：一个模式可以包含多个环境变量
```

> 执行时通过在package.json的scripts属性中添加--mode 环境名来读取.env.模式文件中对应的环境变量

2. 主要通过cross-env配合webpack来进行配置

    > 结合node.js中的process模块读取环境变量

    ```
    process.env.环境变量名
    ```

    

> 具体步骤：

- 安装cross-env包实现跨平台环境变量配置

```
npm install cross-env -D
```

- 在package.json中添加cross-env运行环境脚本

```
  "scripts": {
    "serve": "cross-env BUILD_ENV=dev vue-cli-service serve",
    "build": "cross-env BUILD_ENV=prod vue-cli-service build",
  }
```

> 注意：cross-env key=value 只是添加环境变量，不运行任何内容

- 给process.env添加自定义的环境变量,通过vue.config.js来添加自定义环境变量,配置如下：

```
module.exports = {
  lintOnSave: false, // 是否进行对代码用ESlint检验，false代表不检验
  devServer: {
    port: 9999
  },
  chainWebpack: config => {
    // console.log('config:::', config.plugin('define'))
    config
      .plugin('define')
      .tap(args => {
        args[0]['process.env'].BUILD_ENV = JSON.stringify(process.env.BUILD_ENV)
        return args;
      })
  }

}

```



注意：BUILD_ENV=dev 名子要和build中的文件名一致，方便读取不同环境的文件

- 在src下创建build目录添加不同环境变化匹配的文件

```
- build
  - dev.js
  - prod.js
  
 例如：在prod.js中添加配置url，例如：
 module.exports = {
  BASE_URL: 'https://www.365msmk.com'
}

```

- 在http请求的js中针对npm run 来自动读取不同环境变量

    ```
    const config_env = require(`../build/${process.env.BUILD_ENV}.js`);
    
    const service = Axios.create({
      baseURL: config_env.BASE_URL,
      timeout: 3000
    })
    
    ```





- 适配:

    rem.js,

    flexible.js

    ```
    .banner {
      width:150px===>xxrem或xxxvw
    }
    
    ```

    

解决适配大杀器：可以直接用px写布局，最终生成rem或vw,并且不用除以2(不用换算),从而解放生产力，提高开发 效率



```
 npm install @moohng/postcss-px2vw --save-dev
```



配置:在项目根目录下创建postcss:postcss.config.js文件，并添加：

```
module.exports = {
  plugins: {
    '@moohng/postcss-px2vw': {
        rootValue: 200  //参考html字号
    }
  }
}
```



vw:屏幕宽度 100vw:屏幕的百分之100

vh:屏幕高度

vmax:

vmin:





##  vuex复习

## 一、vue-devtools

[vue-devtools](https://github.com/vuejs/vue-devtools)

国内chrome插件下载地址：https://crxdl.com/  (不用翻墙)



## 二、vuex

1. vuex是什么：Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式**。它采用集中式存储管理应用的所有组件的状态（面试中：vuex是vue中集中管理数据工具）

2. vue组件通讯：父子通讯（父子，子父），兄弟通讯，隔代组件通讯（A->B->C->D）

3. vuex可以实现兄弟通讯，隔代通讯，父子通讯

4. vuex通常存放哪些数据：组件之间经常共享的数据

5. vuex通常用于什么样项目：根据项目复杂程度，组件比较多，数据传递比较复杂，数据难于管理时，就会想到vuex,例如：电商，后台管理的项目

6. vuex的核心：

    - state：数据仓库

        - 组件中读取state数据 

        ```
        第一种方式：this.$store.state.count
        第二种方式：通过mapSate读取(也称做vuex辅助函数)
          步骤：
          1.import { mapState } from 'vuex'
          2.通过computed中注入mateSate
            computed: {
            	...mapState(['count', 'token', 'index'])
            }
        ```

    - actions:通常用于异步方法操作，但不会在这步改变state值

        - 组件中调用actions方法

        ```
        第一种方法：this.$store.dispath('actions的方法名',要传递的值)
        第二种方法：通过mapActions读取(也称做vuex辅助函数)
         步骤：
          1.import { mapActions } from 'vuex'
          2.通过methods中注入mateActions
            methods: {
            	...mapActions(['count', 'token', 'index'])
            }
        ```

        

    - mutations

    ```
     在actions中方法中通过commit('mutaions方法名',要传递的值);
    ```

    > 注意：通常在muations中定义的方法名,并且mutions中代码都是同步操作
    >
    > 组件改变vuex中数据状态的流程：

    ```
           dispath           commit             逻辑操作
    vue组件---------->actions--------->mutations------->改变state---->最终同步到vue组件视图上
    ```

    > vuex中数据持久化的问题？？
    >
    > 实现原理：利用本地存储

    ```
    localStorage,sessionStorage,cookie
    localStorage.setItem('cartData',JSON.stringify(obj))  //存储数据
    let cartData=localStorage.getItem('cartData')  //读取本地存储数据
    
    cartData=JSON.parse(cartData);
    
    localStorage.removeItem('count') //清除某一属性指定的值
    localStorage.clear() //清除全部
    
    ```

    > 这里除了通过本地存储之外，也可以通过一个vuex数据持久化插件来解决
    >
    > 例如：vuex-persistedstate
    >
    > 使用方法：

    ```
    第一步：安装：
    	npm install --save vuex-persistedstate
    
    第二步：在vuex中的index.js引入
    import createPersistedState from "vuex-persistedstate";
    
    第三步：在vuex实例上通过plugins注入
    export default new Vuex.Store({
      ...
      plugins: [createPersistedState()]
    
    })
    ```

    

    

    - getters: getters相当于是vuex中的state的计算属性

    ```
    第一种方法：this.$store.getters.getters的计算属性名
    第二种方法：通过mapGetters读取(也称做vuex辅助函数)
     步骤：
      1.import { mapGetters } from 'vuex'
      2.通过computed中注入mateActions
        computed: {
        	...mapGetters(['count', 'token', 'index'])
        }
    ```

    

    - module:为了解决应用的所有状态会集中到一个比较大的对象的臃肿,管理复杂的问题

    ```
    读取module中的数据状态
    
    在compute中通过this.$store.state.module的模块属性.模块内部的属性名
    例如：
    export default new Vuex.Store({
      ...
      modules: {
        user: user,
        orderlist: orderlist
      }
    
    })
    
    注：无论用module切割多少个store,最终都会将state,actions,modules合并到一个store树上面
    ```

    - 插件：plugins 为了扩展vuex的功能，例如：vuex的数据持久化插件

    

7. vuex的工程目录

    ```
    - src
      └── store
          ├── index.js          # 我们组装模块并导出 store 的地方
          ├── actions.js        # 根级别的 action
          ├── mutations.js      # 根级别的 mutation
          └── modules
              ├── cart.js       # 购物车模块
              └── products.js   # 产品模块
    ```

    

8. mutations-type 常量化

    ```
    将mutations的公共常量单独存放到一个文件中，便于mutations方法名的管理
    例如：
    export const INCREMENT = 'INCREMENT'
    export const DECREMENT = 'DECREMENT'
    
    然后再mutation.js中引入，如下：
    import { INCREMENT, DECREMENT } from './mutation-types'
    ```

    

9. js文件的自动导入【不是必须会，但会了会让生活更美好--】

   webpack中有一个require.context可实现文件的自动导入



```
//读取./modules/目录下的所有js文件
const moduleFiles = require.context('./modules/', true, /\.js$/);

//console.log('moduleFiles:',moduleFiles.keys())

//通过recude遍历获取所有store，组成{ 文件名:{actions,getters,mutations}: }
const modules = moduleFiles.keys().reduce((module, modulePath) => {
  
  //获取store名
  const moduleName = modulePath.replace(/\.\/(.+)\.\w+/, '$1')
  //取出当前store所有内容
  const value = moduleFiles(modulePath).default
  
  module[moduleName] = value;

  return module;
  
}, {})

```





   数组reduce用法mdn参考文档:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce



正则你还不明白吗，看文档：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp



如何取出文件名的主名部分：   ./orderlist.js 我想取出orderlist如何取出



核心思路：通过正则表达取出







