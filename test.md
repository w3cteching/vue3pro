```
  1.通过给package.json中cross-env来添加不同的环境变量
  {
  	 ...
      "scripts": {
        "serve": "cross-env BUILD_ENV=dev vue-cli-service serve",
        "build": "cross-env BUILD_ENV=prod vue-cli-service build",
        "buildTest": "cross-env BUILD_ENV=test vue-cli-service build",
        "lint": "vue-cli-service lint",
        "start": "npm run serve"
    },
    ...
  }
  
  2.vue.config.js：通过在此文件中添加自定义环境变量
  
  module.exports = {
    lintOnSave: false,
    css: {
        loaderOptions: {
            sass: {
                // 全局注入sass变量、函数、混合, 第一个@符号是css关键字, 第二个@符号代表src文件夹, 不可缺少分号(;)
                data: `@import '@/css/_vw_func.scss';`
            }
        }
    },
    chainWebpack: config => {
        config.module
            .rule('vue')
            .test(/\.vue$/)
            .use('style-vw-loader')
            .loader('style-vw-loader');
        config.plugin('define').tap(args => {
            args[0]['process.env'].BUILD_ENV = JSON.stringify(process.env.BUILD_ENV);
            return args;
        });
    }
};


  
  3.http.js：在此文件中通过上面的自定义环境变量加载不同的文件
  
  const buildConfig = require('../build/' + process.env.BUILD_ENV + '.js');
  url = buildConfig.BASE_URL + url;

  4.router.js：添加路由的基地址
  
  const router = new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    base: process.env.BASE_URL,
    routes,
});



├── src
│   ├── App.vue
│   ├── assets
│   │   ├── css
│   │   ├── images
│   │   └── theme-img
│   ├── build
│   │   ├── dev.js
│   │   ├── prod.js
│   │   └── test.js
│   ├── 

其中build下dev.js文件代码：
module.exports = {
    BASE_URL: 'https://test.365msmk.com',
    //BASE_URL: 'https://test.365msmk.com'
};


跨域代理配置：
  devServer : {
        proxy: {
            '/api' : {
                target: 'url',
                changeOrigin: true,
                pathRewrite: {
                    '^/api' : ''
                }
            }
        }
    }
```

