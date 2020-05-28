module.exports = {
  lintOnSave: false, // 是否进行对代码用ESlint检验，false代表不检验
 // runtimeCompiler: true, // 是否包含vue编译器
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
