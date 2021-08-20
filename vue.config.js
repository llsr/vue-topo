module.exports = {
    // publicPath: '/',
    outputDir: 'dist',
    lintOnSave: true,
    runtimeCompiler: true, //关键点在这 
    chainWebpack: (config) => {
      const svgRule = config.module.rule('svg');
   
      svgRule.uses.clear();
   
      svgRule
        .use('babel-loader')
        .loader('babel-loader')
        .end()
        .use('vue-svg-loader')
        .loader('vue-svg-loader');
    },
  };